import type { IBlockRepository } from "../../../domain/contract/repository/block/block-repository.interface";
import type { IProjectRepository } from "../../../domain/contract/repository/project/project-repository.interface";
import type { Project } from "../../../domain/entities/project/project.entity";
import { AppError } from "../../../shared/error/app.error";
import type { AppOptions } from "../../../shared/types/app-options";
import { ApiResult } from "../../../shared/types/app-result";
import type { IAppMapper } from "../../contract/mapper/app-mapper.interface";
import type { IUseCase } from "../../contract/use-case/use-case.interface";
import type { AddRemoveBlockDto } from "../../dtos/project/add-remove-block.dto";
import type { CreateProjectDto } from "../../dtos/project/create-project.dto";
import type { ProjectDto } from "../../dtos/project/project.dto";
import type { UpdateProjectDto } from "../../dtos/project/update-project.dto";

export class RemoveBlockProjectUseCase implements IUseCase<AddRemoveBlockDto,ProjectDto>{
    constructor(
        private readonly repository:IProjectRepository,
        private readonly blockRepository:IBlockRepository,
        private readonly mapper:IAppMapper<Project,ProjectDto,CreateProjectDto,UpdateProjectDto>
    ) {}

    public async execute(input: AddRemoveBlockDto, options?: AppOptions): Promise<ApiResult<ProjectDto>> {
        try {
            

            const project=await this.repository.findById(input.id,options);

            if(!project){return ApiResult.fail<ProjectDto>(404,AppError.NOT_FOUND.message);} 

            const block=await this.blockRepository.findById(input.blockId);

            if(!block){return ApiResult.fail<ProjectDto>(500,AppError.SERVER_ERROR.message);} 
            
            project.removeBlock(block);

            block.setProject("");

            const removeBlock=await this.blockRepository.update(input.blockId,block);    

            if(!removeBlock) {return ApiResult.fail<ProjectDto>(404,AppError.NOT_FOUND.message);} 

            const result=this.mapper.toDto(project);

            return ApiResult.ok<ProjectDto>(200,result,"Success");

        } catch (error) {
            console.log(error);
            return ApiResult.fail<ProjectDto>(500,AppError.SERVER_ERROR.message);
            
        }
    }

}