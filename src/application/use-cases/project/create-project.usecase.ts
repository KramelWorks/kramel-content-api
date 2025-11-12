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

            const effectiveOptions:AppOptions={
                force:false,
                page:1,
                pageSize:10,
                includeInactive:true,
                includeDeleted:true,
            }

            const slug=SlugUtil.generate(input.title);
            const newProject=this.mapper.create(input);
            const project=await this.repository.findBySlug(slug);
            
            if(project.length>0){
                const lastVersion=await this.repository.findLastVersion(slug,effectiveOptions);
                if(lastVersion){
                    console.log("true")
                   newProject.newVersion(lastVersion?.version);
                }
              }
            
            const saved=await this.repository.save(newProject);

            if(!saved) {return ApiResult.fail<ProjectDto>(404,AppError.NOT_FOUND.message);} 

            const result=this.mapper.toDto(saved);

            return ApiResult.ok<ProjectDto>(201,result,"Success");

        } catch (error) {
            console.log(error);
            return ApiResult.fail<ProjectDto>(500,AppError.SERVER_ERROR.message);
            
        }
    }

}