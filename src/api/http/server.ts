import { app } from "../../app";

export function StartUp(){

    const PORT=process.env.DEFAULT_APP_PORT ?? "3333"
    
    const startUpInfo={
        name:"KramelContent (C) 2025",
        description:"A KramelSuite product",
        company:"KramelWorks",
        status:"Running...",
        uri:`http://localhost:${PORT}`,
        startUpAt:new Date()
    };

    app.listen(PORT,()=>{
        console.clear();
        console.log(startUpInfo)
    });

}