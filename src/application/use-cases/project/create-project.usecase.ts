import { Project } from './../../../domain/entities/project/project.entity';
import type { IProjectRepository } from "../../../domain/contract/repository/project/project-repository.interface";
import { AppError } from "../../../shared/error/app.error";
import type { AppOptions } from "../../../shared/types/app-options";
import { ApiResult } from "../../../shared/types/app-result";
import { SlugUtil } from "../../../shared/utils/slug.util";
import type { IUseCase } from "../../contract/use-case/use-case.interface";
import type { CreateProjectDto } from "../../dtos/project/create-project.dto";
import type { ProjectDto } from "../../dtos/project/project.dto";
import type { UpdateProjectDto } from '../../dtos/project/update-project.dto';
import type { IAppMapper } from '../../contract/mapper/app-mapper.interface';

export class CreateProjectUseCase implements IUseCase<CreateProjectDto,ProjectDto>{
    constructor(
        private readonly repository:IProjectRepository,
        private readonly mapper:IAppMapper<Project,ProjectDto,CreateProjectDto,UpdateProjectDto>) {}

    public async execute(input: CreateProjectDto, options?: AppOptions): Promise<ApiResult<ProjectDto>> {
        try {

            const slug=SlugUtil.generate(input.title);
            const newProject=this.mapper.create(input);
            const project=await this.repository.findBySlug(slug);
            
            if(project.length>0){
                const lastVersion=await this.repository.findLastVersion(slug);
                if(lastVersion?.version){
                   newProject.newVersion(lastVersion?.version);
                }
              }
            
            const saved=await this.repository.save(newProject);

            if(!saved) {return ApiResult.fail<ProjectDto>(500,AppError.SERVER_ERROR.message);} 

            const result=this.mapper.toDto(saved);

            return ApiResult.ok<ProjectDto>(500,result,AppError.SERVER_ERROR.message);

        } catch (error) {
            console.log(error);
            return ApiResult.fail<ProjectDto>(500,AppError.SERVER_ERROR.message);
            
        }
    }

}