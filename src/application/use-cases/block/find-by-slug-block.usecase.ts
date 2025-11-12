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

export class FindBySlugBlockUseCase implements IUseCase<string,BlockDto[]>{
    constructor(
        private readonly repository:IBlockRepository,
        private readonly mapper:IAppMapper<Block,BlockDto,CreateBlockDto,UpdateBlockDto>) {}

    public async execute(input: string, options?: AppOptions): Promise<ApiResult<BlockDto[]>> {
        try {
            console.log(input)
            const blocks=await this.repository.findBySlug(input,options);
            
            const result=blocks.map(this.mapper.toDto);
            
            return ApiResult.ok<BlockDto[]>(200,result,`${blocks.length} record(s) found`);

        } catch (error) {
            console.log(error);
            return ApiResult.fail<BlockDto[]>(500,AppError.SERVER_ERROR.message);
            
        }
    }

}