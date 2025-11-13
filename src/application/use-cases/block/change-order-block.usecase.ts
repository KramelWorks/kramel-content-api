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
import type { BlockOrderDto } from '../../dtos/block/block-order.dto';

export class ChangeOrderBlockUseCase implements IUseCase<BlockOrderDto,BlockDto>{
    constructor(
        private readonly repository:IBlockRepository,
        private readonly mapper:IAppMapper<Block,BlockDto,CreateBlockDto,UpdateBlockDto>) {}

    public async execute(input: BlockOrderDto, options?: AppOptions): Promise<ApiResult<BlockDto>> {
        try {


            const blocks=await this.repository.findBySlug(input.slug,options);
            
            console.log(blocks.length)

            if(blocks.length==0){return ApiResult.fail<BlockDto>(404,AppError.NOT_FOUND.message);}

            const existingOrder=blocks.filter(eo=>eo.order==input.newOrder);

            console.log(existingOrder);

            if(existingOrder.length!=0){return ApiResult.fail<BlockDto>(403,AppError.FORBIDDEN.message);}

            const block = blocks.find(b => b.id === input.id);
            
            console.log(block)

            if(!block){return ApiResult.fail<BlockDto>(404,AppError.NOT_FOUND.message);}

            block.changeOrder(input.newOrder);

            const blockChanged=await this.repository.update(input.id,block);
            if(!blockChanged){return ApiResult.fail<BlockDto>(500,AppError.UNKNOWN_ERROR.message);}

            const result=this.mapper.toDto(blockChanged);
            
            return ApiResult.ok<BlockDto>(200,result,"Success");

        } catch (error) {
            console.log(error);
            return ApiResult.fail<BlockDto>(500,AppError.SERVER_ERROR.message);
        }
    }

}