import type { IProjectRepository } from "../../../domain/contract/repository/project/project-repository.interface";
import type { Project } from "../../../domain/entities/project/project.entity";
import { AppError } from "../../../shared/error/app.error";
import type { AppOptions } from "../../../shared/types/app-options";
import { ApiResult } from "../../../shared/types/app-result";
import type { IAppMapper } from "../../contract/mapper/app-mapper.interface";
import type { IUseCase } from "../../contract/use-case/use-case.interface";
import type { CreateProjectDto } from "../../dtos/project/create-project.dto";
import type { ProjectDto } from "../../dtos/project/project.dto";
import type { TagDto } from "../../dtos/project/tag.dto";
import type { UpdateProjectDto } from "../../dtos/project/update-project.dto";

export class AddTagProjectUseCase implements IUseCase<TagDto,ProjectDto>{
    constructor(
        private readonly repository:IProjectRepository,
        private readonly mapper:IAppMapper<Project,ProjectDto,CreateProjectDto,UpdateProjectDto>
    ) {}

    public async execute(input: TagDto, options?: AppOptions): Promise<ApiResult<ProjectDto>> {
        try {
            

            const project=await this.repository.findById(input.id,options);

            if(!project){return ApiResult.fail<ProjectDto>(500,AppError.SERVER_ERROR.message);} 
            
            project.addTag(input.tag);

            const taged=await this.repository.update(input.id,project);    

            if(!taged) {return ApiResult.fail<ProjectDto>(500,AppError.SERVER_ERROR.message);} 

            const result=this.mapper.toDto(taged);

            return ApiResult.ok<ProjectDto>(500,result,AppError.SERVER_ERROR.message);

        } catch (error) {
            console.log(error);
            return ApiResult.fail<ProjectDto>(500,AppError.SERVER_ERROR.message);
            
        }
    }

}