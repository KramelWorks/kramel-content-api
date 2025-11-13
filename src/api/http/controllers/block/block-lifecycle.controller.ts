import type { Request, Response } from "express";
import type { IUseCase } from "../../../../application/contract/use-case/use-case.interface";
import type { BlockDto } from "../../../../application/dtos/block/block.dto";
import { ApiResult } from "../../../../shared/types/app-result";
import { AppError } from "../../../../shared/error/app.error";

export class BlockLifecycleController{

    constructor(
        private readonly activatedBlockUseCase:IUseCase<string,BlockDto>,
        private readonly deactivatedBlockUseCase:IUseCase<string,BlockDto>,
        private readonly restoreBlockUseCase:IUseCase<string,BlockDto>
    ) {
        
    }

    public async activate(req:Request,res:Response){

        const {id}=req.params;

        let result=null;

        if(id==undefined){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
        }else{
            result=await this.activatedBlockUseCase.execute(id);
        }

        return res.status(result.statusCode).json(result.toJson());
    } 

    public async deactivate(req:Request,res:Response){

        const {id}=req.params;

        let result=null;

        if(id==undefined){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
        }else{
            result=await this.deactivatedBlockUseCase.execute(id);
        }

        return res.status(result.statusCode).json(result.toJson());
    } 

    public async restore(req:Request,res:Response){

        const {id}=req.params;

        let result=null;

        if(id==undefined){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
        }else{
            result=await this.restoreBlockUseCase.execute(id);
        }

        return res.status(result.statusCode).json(result.toJson());
    } 
}
















