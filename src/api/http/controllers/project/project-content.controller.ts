import type { Request, Response } from "express";
import type { IUseCase } from "../../../../application/contract/use-case/use-case.interface";
import type { AddRemoveBlockDto } from "../../../../application/dtos/project/add-remove-block.dto";
import type { ProjectDto } from "../../../../application/dtos/project/project.dto";
import type { TagDto } from "../../../../application/dtos/project/tag.dto";
import { ApiResult } from "../../../../shared/types/app-result";
import { AppError } from "../../../../shared/error/app.error";

export class ProjectContentController{

    constructor(
        private readonly addBlockProjectUseCase:IUseCase<AddRemoveBlockDto,ProjectDto>,
        private readonly addTagProjectUseCase:IUseCase<TagDto,ProjectDto>,
        private readonly removeBlockProjectUseCase:IUseCase<AddRemoveBlockDto,ProjectDto>,
        private readonly removeTagProjectUseCase:IUseCase<TagDto,ProjectDto>,
    ) {
     
    }

    public async addBlock(req:Request,res:Response){

        const dto:AddRemoveBlockDto={...req.body};
        const {id}=req.params;

        let result=null;

        if(!id || !dto.blockId){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
        }else{
            dto.id=id;
            result=await this.addBlockProjectUseCase.execute(dto);
        }

        return res.status(result.statusCode).json(result.toJson());
    }

    public async removeBlock(req:Request,res:Response){

        const dto:AddRemoveBlockDto={...req.body};
        const {id}=req.params;

        let result=null;

        if(!id || !dto.blockId){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
        }else{
            dto.id=id;
            result=await this.removeBlockProjectUseCase.execute(dto);
        }
        return res.status(result.statusCode).json(result.toJson());
    }

        public async addTag(req:Request,res:Response){

        const dto:TagDto={...req.body};
        const {id}=req.params;

        let result=null;

        if(!id || !dto.tag){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
        }else{
            dto.id=id;
            result=await this.addTagProjectUseCase.execute(dto);
        }

        return res.status(result.statusCode).json(result.toJson());
    }

    public async removeTag(req:Request,res:Response){

        const dto:TagDto={...req.body};
        const {id}=req.params;

        let result=null;

        if(!id || !dto.tag ){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
        }else{
            dto.id=id;
            result=await this.removeTagProjectUseCase.execute(dto);
        }
        return res.status(result.statusCode).json(result.toJson());
    }
}
