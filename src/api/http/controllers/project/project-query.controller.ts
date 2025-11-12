import type { Request, Response } from "express";
import type { IUseCase } from "../../../../application/contract/use-case/use-case.interface";
import type { ProjectDto } from "../../../../application/dtos/project/project.dto";
import { buildAppOptions } from "../../../../shared/helpers/build-app-options.helper";
import { parseProjectFilter } from "../../../../shared/helpers/filter.helper";
import type { FindVersion } from "../../../../application/dtos/project/find-version.dto";
import { ApiResult } from "../../../../shared/types/app-result";
import { AppError } from "../../../../shared/error/app.error";

export class ProjectQueryController{

    constructor(
        private readonly findAllProjectUseCase:IUseCase<null,ProjectDto[]>,
        private readonly findByIdProjectUseCase:IUseCase<string,ProjectDto>,
        private readonly findBySlugProjectUseCase:IUseCase<string,ProjectDto[]>,
        private readonly findByTitleProjectUseCase:IUseCase<string,ProjectDto[]>,
        private readonly findByVersionProjectUseCase:IUseCase<FindVersion,ProjectDto>,
        private readonly findLastVersionProjectUseCase:IUseCase<string,ProjectDto>,
    ) {
        
    }

    public async find(req:Request,res:Response){
        const options=buildAppOptions(req);
        const filter=parseProjectFilter(req);

        let result=null;

        if(filter.slug && !filter.version){
            result=await this.findBySlugProjectUseCase.execute(filter.slug,options);

        }else if(filter.slug && filter.version){
            if(filter.version==="latest"){
                result=await this.findLastVersionProjectUseCase.execute(filter.slug,options);
            }else{
                const findVersion:FindVersion={
                    slug:filter.slug,
                    version:parseInt(filter.version)
                }
                result=await this.findByVersionProjectUseCase.execute(findVersion,options);
            }
        }else if(filter.title){
            result=await this.findByTitleProjectUseCase.execute(filter.title,options);
        }else{
            result=await this.findAllProjectUseCase.execute(null,options);
        }

        return res.status(result.statusCode).json(result.toJson());
    } 

    public async findById(req:Request,res:Response){
        const options=buildAppOptions(req);
        const {id}=req.params;

        let result=null;

        if(id==undefined){
            result=ApiResult.fail<null>(400,AppError.FIELD_REQUIRED.message);
        }else{
            result=await this.findByIdProjectUseCase.execute(id,options);
        }

        return res.status(result.statusCode).json(result.toJson());
    }
}
