import type { Request, Response } from "express";
import type { IUseCase } from "../../../../application/contract/use-case/use-case.interface";
import type { BlockDto } from "../../../../application/dtos/block/block.dto";
import { buildAppOptions } from "../../../../shared/helpers/build-app-options.helper";
import type { FindVersion } from "../../../../shared/types/find-version";
import { ApiResult } from "../../../../shared/types/app-result";
import { AppError } from "../../../../shared/error/app.error";
import { parseBlockFilter } from "../../../../shared/helpers/filter.helper";

export class BlockQueryController{

    constructor(
        private readonly findAllBlockUseCase:IUseCase<null,BlockDto[]>,
        private readonly findByIdBlockUseCase:IUseCase<string,BlockDto>,
        private readonly findBySlugBlockUseCase:IUseCase<string,BlockDto[]>,
        private readonly findByTitleBlockUseCase:IUseCase<string,BlockDto[]>,
        private readonly findByVersionBlockUseCase:IUseCase<FindVersion,BlockDto>,
        private readonly findLastVersionBlockUseCase:IUseCase<string,BlockDto>,
    ) {
        
    }

    public async find(req:Request,res:Response){
        const options=buildAppOptions(req);
        const filter=parseBlockFilter(req);

        let result=null;

        if(filter.slug && !filter.version){
            result=await this.findBySlugBlockUseCase.execute(filter.slug,options);

        }else if(filter.slug && filter.version){
            if(filter.version==="latest"){
                result=await this.findLastVersionBlockUseCase.execute(filter.slug,options);
            }else{
                const findVersion:FindVersion={
                    slug:filter.slug,
                    version:parseInt(filter.version)
                }
                result=await this.findByVersionBlockUseCase.execute(findVersion,options);
            }
        }else if(filter.title){
            result=await this.findByTitleBlockUseCase.execute(filter.title,options);
        }else{
            result=await this.findAllBlockUseCase.execute(null,options);
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
            result=await this.findByIdBlockUseCase.execute(id,options);
        }

        return res.status(result.statusCode).json(result.toJson());
    }
}
