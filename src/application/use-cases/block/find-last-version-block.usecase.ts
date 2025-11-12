import { Block } from '../../../domain/entities/block/block.entity';
import type { IBlockRepository } from "../../../domain/contract/repository/block/block-repository.interface";
import { AppError } from "../../../shared/error/app.error";
import type { AppOptions } from "../../../shared/types/app-options";
import { ApiResult } from "../../../shared/types/app-result";
import type { IUseCase } from "../../contract/use-case/use-case.interface";
import type { CreateBlockDto } from "../../dtos/block/create-block.dto";
import type { BlockDto } from "../../dtos/block/block.dto";
import type { UpdateBlockDto } from '../../dtos/block/update-block.dto';
import type { IAppMapper } from '../../contract/mapper/app-mapper.interface';

export class FindLastVersionBlockUseCase implements IUseCase<string,BlockDto>{
    constructor(
        private readonly repository:IBlockRepository,
        private readonly mapper:IAppMapper<Block,BlockDto,CreateBlockDto,UpdateBlockDto>) {}

    public async execute(input: string, options?: AppOptions): Promise<ApiResult<BlockDto>> {
        try {

            const block=await this.repository.findLastVersion(input,options);

            if(!block){return ApiResult.fail<BlockDto>(404,AppError.NOT_FOUND.message);}
            
            const result=this.mapper.toDto(block)
            
            return ApiResult.ok<BlockDto>(200,result,"Success");

        } catch (error) {
            console.log(error);
            return ApiResult.fail<BlockDto>(500,AppError.SERVER_ERROR.message);
            
        }
    }

}