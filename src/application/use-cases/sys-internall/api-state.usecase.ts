import type { AppOptions } from "../../../shared/types/app-options";
import { ApiResult } from "../../../shared/types/app-result";
import type { IUseCase } from "../../contract/use-case/use-case.interface";
import type { ApiStateDto } from "../../dtos/sys-internall/api-state.dto";

export class ApiStateUseCase implements IUseCase<null,ApiStateDto>{

    public async execute(input: null, options?: AppOptions): Promise<ApiResult<ApiStateDto>> {
        const apiState:ApiStateDto={
            name:"KramelContent (C) 2025",
            description:"A KramelSuite product",
            company:"KramelWorks",
            status:"Running...",
            uri:`http://localhost:${process.env.DEFAULT_APP_PORT}`,
            startUpAt:new Date()
        };

        return ApiResult.ok<ApiStateDto>(200,apiState,"Success");
    }


}