import type { Request, Response } from "express";
import type { IUseCase } from "../../../../application/contract/use-case/use-case.interface";
import type { BlockOrderDto } from "../../../../application/dtos/block/block-order.dto";
import type { BlockProjectDto } from "../../../../application/dtos/block/block-project.dto";
import type { BlockDto } from "../../../../application/dtos/block/block.dto";
import { ApiResult } from "../../../../shared/types/app-result";
import { AppError } from "../../../../shared/error/app.error";

export class BlockContentController{

    constructor(
        private readonly changeOrderBlockUseCase:IUseCase<BlockOrderDto,BlockDto>,
        private readonly changeProjectBlockUseCase:IUseCase<BlockProjectDto,BlockDto>
    ) {
     
    }

    public async changeOrder(req:Request,res:Response){
        const {id}=req.params;
        const dto:BlockOrderDto={...req.body};

        let result=null;

        if(!dto.newOrder || !id){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
        }else{
            dto.id=id;
            result=await this.changeOrderBlockUseCase.execute(dto);
        }

        return res.status(result.statusCode).json(result.toJson());

    }

    public async changeProject(req:Request,res:Response){
        const {id}=req.params;
        const dto:BlockProjectDto={...req.body};

        let result=null;

        if(!dto.newProject || !id){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
        }else{
            dto.id=id;
            result=await this.changeProjectBlockUseCase.execute(dto);
        }

        return res.status(result.statusCode).json(result.toJson());
    }

}
