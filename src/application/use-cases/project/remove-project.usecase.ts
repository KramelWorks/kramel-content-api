import type { IProjectRepository } from "../../../domain/contract/repository/project/project-repository.interface";
import { AppError } from "../../../shared/error/app.error";
import type { AppOptions } from "../../../shared/types/app-options";
import { ApiResult } from "../../../shared/types/app-result";
import type { IUseCase } from "../../contract/use-case/use-case.interface";

export class RemoveProjectUseCase implements IUseCase<string,boolean>{
    constructor(
        private readonly repository:IProjectRepository,
        ) {}

    public async execute(input: string, options?: AppOptions): Promise<ApiResult<boolean>> {
        try {

            const project=await this.repository.findById(input);

            if(!project){return ApiResult.fail<boolean>(500,AppError.SERVER_ERROR.message);} 
            
            let result=false;

            if(options?.force){
                result=await this.repository.remove(input);    
            }
            else{
                project.delete();
                const update=await this.repository.update(input,project);
                if(update){result=true}
            }

            if(!result) {return ApiResult.fail<boolean>(500,AppError.SERVER_ERROR.message);} 

            return ApiResult.ok<boolean>(500,result,AppError.SERVER_ERROR.message);

        } catch (error) {
            console.log(error);
            return ApiResult.fail<boolean>(500,AppError.SERVER_ERROR.message);
            
        }
    }

}