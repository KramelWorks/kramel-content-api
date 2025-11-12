import { Block } from '../../../domain/entities/block/block.entity';
import type { IBlockRepository } from "../../../domain/contract/repository/block/block-repository.interface";
import { AppError } from "../../../shared/error/app.error";
import type { AppOptions } from "../../../shared/types/app-options";
import { ApiResult } from "../../../shared/types/app-result";
import { SlugUtil } from "../../../shared/utils/slug.util";
import type { IUseCase } from "../../contract/use-case/use-case.interface";
import type { CreateBlockDto } from "../../dtos/block/create-block.dto";
import type { BlockDto } from "../../dtos/block/block.dto";
import type { UpdateBlockDto } from '../../dtos/block/update-block.dto';
import type { IAppMapper } from '../../contract/mapper/app-mapper.interface';

export class UpdateBlockUseCase implements IUseCase<UpdateBlockDto,BlockDto>{
    constructor(
        private readonly repository:IBlockRepository,
        private readonly mapper:IAppMapper<Block,BlockDto,CreateBlockDto,UpdateBlockDto>) {}

    public async execute(input: UpdateBlockDto, options?: AppOptions): Promise<ApiResult<BlockDto>> {
        try {

            const effectiveOptions:AppOptions={
                force:false,
                page:1,
                pageSize:10,
                includeInactive:true,
                includeDeleted:true,
            }

            const slug=SlugUtil.generate(input.title);
            const block=await this.repository.findBySlug(slug);
            
            let version=null;

            if(block.length>0){
                const lastVersion=await this.repository.findLastVersion(slug,effectiveOptions);
                if(lastVersion?.version){
                  version=lastVersion?.version;
                }
              }
            
            const update=await this.repository.findById(input.id);
            
            if(!update){return ApiResult.fail<BlockDto>(404,AppError.NOT_FOUND.message);} 

            const newBlock=this.mapper.update(input,update);
            
            newBlock.newVersion(version ?? newBlock.version);

            const saved=await this.repository.save(newBlock);

            if(!saved) {return ApiResult.fail<BlockDto>(500,AppError.SERVER_ERROR.message);} 

            const result=this.mapper.toDto(saved);

            return ApiResult.ok<BlockDto>(500,result,AppError.SERVER_ERROR.message);

        } catch (error) {
            console.log(error);
            return ApiResult.fail<BlockDto>(500,AppError.SERVER_ERROR.message);
            
        }
    }

}