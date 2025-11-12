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

export class CreateBlockUseCase implements IUseCase<CreateBlockDto,BlockDto>{
    constructor(
        private readonly repository:IBlockRepository,
        private readonly mapper:IAppMapper<Block,BlockDto,CreateBlockDto,UpdateBlockDto>) {}

    public async execute(input: CreateBlockDto, options?: AppOptions): Promise<ApiResult<BlockDto>> {
        try {

            const effectiveOptions:AppOptions={
                force:false,
                page:1,
                pageSize:10,
                includeInactive:true,
                includeDeleted:true,
            }

            const slug=SlugUtil.generate(input.title);
            const newBlock=this.mapper.create(input);
            const block=await this.repository.findBySlug(slug);
            
            if(block.length>0){
                const lastVersion=await this.repository.findLastVersion(slug,effectiveOptions);
                if(lastVersion){
                    console.log("true")
                   newBlock.newVersion(lastVersion?.version);
                }
              }
            
            const saved=await this.repository.save(newBlock);

            if(!saved) {return ApiResult.fail<BlockDto>(404,AppError.NOT_FOUND.message);} 

            const result=this.mapper.toDto(saved);

            return ApiResult.ok<BlockDto>(201,result,"Success");

        } catch (error) {
            console.log(error);
            return ApiResult.fail<BlockDto>(500,AppError.SERVER_ERROR.message);
            
        }
    }

}