import type { IProjectRepository } from "../../../domain/contract/repository/project/project-repository.interface";
import type { Project } from "../../../domain/entities/project/project.entity";
import { AppError } from "../../../shared/error/app.error";
import type { AppOptions } from "../../../shared/types/app-options";
import { ApiResult } from "../../../shared/types/app-result";
import type { IAppMapper } from "../../contract/mapper/app-mapper.interface";
import type { IUseCase } from "../../contract/use-case/use-case.interface";
import type { CreateProjectDto } from "../../dtos/project/create-project.dto";
import type { ProjectDto } from "../../dtos/project/project.dto";
import type { UpdateProjectDto } from "../../dtos/project/update-project.dto";

export class DeactivatedProjectUseCase implements IUseCase<string,ProjectDto>{
    constructor(
        private readonly repository:IProjectRepository,
        private readonly mapper:IAppMapper<Project,ProjectDto,CreateProjectDto,UpdateProjectDto>
    ) {}

    public async execute(input: string, options?: AppOptions): Promise<ApiResult<ProjectDto>> {
        try {
            
            const effectiveOptions: AppOptions = {
              includeInactive: true,
              includeDeleted: false,
              force: options?.force ?? false,
              page: options?.page ?? 1,
              pageSize: options?.pageSize ?? 10,
            };

            const project=await this.repository.findById(input,effectiveOptions);

            if(!project){return ApiResult.fail<ProjectDto>(404,AppError.NOT_FOUND.message);} 
            
            project.deactivate();

            const deactivated=await this.repository.update(input,project);    

            if(!deactivated) {return ApiResult.fail<ProjectDto>(500,AppError.SERVER_ERROR.message);} 

            const result=this.mapper.toDto(deactivated);

            return ApiResult.ok<ProjectDto>(200,result,"Success");

        } catch (error) {
            console.log(error);
            return ApiResult.fail<ProjectDto>(500,AppError.SERVER_ERROR.message);
            
        }
    }

}