export class SlugUtil{

    public static generate(value:string):string{
        return value
                .toLowerCase()                     
                .normalize('NFD')                  
                .replace(/[\u0300-\u036f]/g, '')  
                .replace(/[^a-z0-9 ]/g, '')       
                .trim()                            
                .replace(/\s+/g, '-');  
    }
}