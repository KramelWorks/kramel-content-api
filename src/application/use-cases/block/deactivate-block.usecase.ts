import type { IBlockRepository } from "../../../domain/contract/repository/block/block-repository.interface";
import type { Block } from "../../../domain/entities/block/block.entity";
import { AppError } from "../../../shared/error/app.error";
import type { AppOptions } from "../../../shared/types/app-options";
import { ApiResult } from "../../../shared/types/app-result";
import type { IAppMapper } from "../../contract/mapper/app-mapper.interface";
import type { IUseCase } from "../../contract/use-case/use-case.interface";
import type { CreateBlockDto } from "../../dtos/block/create-block.dto";
import type { BlockDto } from "../../dtos/block/block.dto";
import type { UpdateBlockDto } from "../../dtos/block/update-block.dto";

export class DeactivatedBlockUseCase implements IUseCase<string,BlockDto>{
    constructor(
        private readonly repository:IBlockRepository,
        private readonly mapper:IAppMapper<Block,BlockDto,CreateBlockDto,UpdateBlockDto>
    ) {}

    public async execute(input: string, options?: AppOptions): Promise<ApiResult<BlockDto>> {
        try {
            
            const effectiveOptions: AppOptions = {
              includeInactive: true,
              includeDeleted: false,
              force: options?.force ?? false,
              page: options?.page ?? 1,
              pageSize: options?.pageSize ?? 10,
            };

            const block=await this.repository.findById(input,effectiveOptions);

            if(!block){return ApiResult.fail<BlockDto>(404,AppError.NOT_FOUND.message);} 
            
            block.deactivate();

            const deactivated=await this.repository.update(input,block);    

            if(!deactivated) {return ApiResult.fail<BlockDto>(500,AppError.SERVER_ERROR.message);} 

            const result=this.mapper.toDto(deactivated);

            return ApiResult.ok<BlockDto>(200,result,"Success");

        } catch (error) {
            console.log(error);
            return ApiResult.fail<BlockDto>(500,AppError.SERVER_ERROR.message);
            
        }
    }

}