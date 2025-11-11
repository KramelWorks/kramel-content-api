import type { Request, Response } from "express";
import type { IUseCase } from "../../../../application/contract/use-case/use-case.interface";
import type { UpdateBlockDto } from "../../../../application/dtos/block/update-block.dto";
import type { CreateProjectDto } from "../../../../application/dtos/project/create-project.dto";
import type { ProjectDto } from "../../../../application/dtos/project/project.dto";
import { ApiResult } from "../../../../shared/types/app-result";
import { AppError } from "../../../../shared/error/app.error";
import type { UpdateProjectDto } from "../../../../application/dtos/project/update-project.dto";

export class ProjectCrudController{

    constructor(
        private readonly createProjectUseCase:IUseCase<CreateProjectDto,ProjectDto>,
        private readonly removeProjectUseCase:IUseCase<string,ProjectDto>,
        private readonly updateProjectUseCase:IUseCase<UpdateBlockDto,ProjectDto>,
    ) {
         
    }

    public async create(req:Request,res:Response){

        const dto:CreateProjectDto={...req.body};

        let result=null;

        if(!dto.tenantId || !dto.title){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
        }else{
            result=await this.createProjectUseCase.execute(dto);
        }

        return res.status(result.statusCode).json(result.toJson());
    } 

    public async update(req:Request,res:Response){

        const dto:UpdateProjectDto={...req.body};
        const {id}=req.params;

        let result=null;

        if(!id || !dto.title){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
            
        }else{
            dto.id=id;
            result=await this.updateProjectUseCase.execute(dto);
        }

        return res.status(result.statusCode).json(result.toJson());
    } 

    public async remove(req:Request,res:Response){
        const {id}=req.params;

        let result=null;
        if(id==undefined){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
            
        }else{
            result=await this.removeProjectUseCase.execute(id);
        }

        return res.status(result.statusCode).json(result.toJson());
    }
}

















