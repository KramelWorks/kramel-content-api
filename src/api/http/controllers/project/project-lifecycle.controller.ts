import type { Request, Response } from "express";
import type { IUseCase } from "../../../../application/contract/use-case/use-case.interface";
import type { ProjectDto } from "../../../../application/dtos/project/project.dto";
import { ApiResult } from "../../../../shared/types/app-result";
import { AppError } from "../../../../shared/error/app.error";

export class ProjectLifecycleController{

    constructor(
        private readonly activatedProjectUseCase:IUseCase<string,ProjectDto>,
        private readonly deactivatedProjectUseCase:IUseCase<string,ProjectDto>,
        private readonly restoreProjectUseCase:IUseCase<string,ProjectDto>
    ) {
        
    }

    public async activate(req:Request,res:Response){

        const {id}=req.params;

        let result=null;

        if(id==undefined){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
        }else{
            result=await this.activatedProjectUseCase.execute(id);
        }

        return res.status(result.statusCode).json(result.toJson());
    } 

    public async deactivate(req:Request,res:Response){

        const {id}=req.params;

        let result=null;

        if(id==undefined){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
        }else{
            result=await this.deactivatedProjectUseCase.execute(id);
        }

        return res.status(result.statusCode).json(result.toJson());
    } 

    public async restore(req:Request,res:Response){

        const {id}=req.params;

        let result=null;

        if(id==undefined){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
        }else{
            result=await this.restoreProjectUseCase.execute(id);
        }

        return res.status(result.statusCode).json(result.toJson());
    } 
}
















