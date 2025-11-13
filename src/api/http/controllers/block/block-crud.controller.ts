import type { Request, Response } from "express";
import type { IUseCase } from "../../../../application/contract/use-case/use-case.interface";
import type { UpdateBlockDto } from "../../../../application/dtos/block/update-block.dto";
import type { CreateBlockDto } from "../../../../application/dtos/block/create-block.dto";
import type { BlockDto } from "../../../../application/dtos/block/block.dto";
import { ApiResult } from "../../../../shared/types/app-result";
import { AppError } from "../../../../shared/error/app.error";
import { buildAppOptions } from "../../../../shared/helpers/build-app-options.helper";

export class BlockCrudController{

    constructor(
        private readonly createBlockUseCase:IUseCase<CreateBlockDto,BlockDto>,
        private readonly removeBlockUseCase:IUseCase<string,boolean>,
        private readonly updateBlockUseCase:IUseCase<UpdateBlockDto,BlockDto>,
    ) {
         
    }

    public async create(req:Request,res:Response){

        const dto:CreateBlockDto={...req.body};

        let result=null;

        if(!dto.tenantId || !dto.title){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
        }else{
            result=await this.createBlockUseCase.execute(dto);
        }

        return res.status(result.statusCode).json(result.toJson());
    } 

    public async update(req:Request,res:Response){

        const dto:UpdateBlockDto={...req.body};
        const {id}=req.params;

        let result=null;

        if(!id || !dto.title){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
            
        }else{
            dto.id=id;
            result=await this.updateBlockUseCase.execute(dto);
        }

        return res.status(result.statusCode).json(result.toJson());
    } 

    public async remove(req:Request,res:Response){
        const {id}=req.params;
        const options=buildAppOptions(req);

        let result=null;
        if(id==undefined){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
            
        }else{
            result=await this.removeBlockUseCase.execute(id,options);
        }

        return res.status(result.statusCode).json(result.toJson());
    }
}

















