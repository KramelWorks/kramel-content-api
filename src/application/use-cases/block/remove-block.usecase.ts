import type { IBlockRepository } from "../../../domain/contract/repository/block/block-repository.interface";
import { AppError } from "../../../shared/error/app.error";
import type { AppOptions } from "../../../shared/types/app-options";
import { ApiResult } from "../../../shared/types/app-result";
import type { IUseCase } from "../../contract/use-case/use-case.interface";

export class RemoveBlockUseCase implements IUseCase<string,boolean>{
    constructor(
        private readonly repository:IBlockRepository,
        ) {}

    public async execute(input: string, options?: AppOptions): Promise<ApiResult<boolean>> {
        try {

            const block=await this.repository.findById(input);

            if(!block){return ApiResult.fail<boolean>(404,AppError.NOT_FOUND.message);} 
            
            let result=false;

            console.log(options)
            if(options?.force){
                result=await this.repository.remove(input);    
            }
            else{
                block.delete();
                const update=await this.repository.update(input,block);
                if(update){result=true}
            }

            if(!result) {return ApiResult.fail<boolean>(500,AppError.SERVER_ERROR.message);} 

            return ApiResult.ok<boolean>(200,result,"Success");

        } catch (error) {
            console.log(error);
            return ApiResult.fail<boolean>(500,AppError.SERVER_ERROR.message);
            
        }
    }

}