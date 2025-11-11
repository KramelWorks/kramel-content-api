import { Project } from '../../../domain/entities/project/project.entity';
import type { IProjectRepository } from "../../../domain/contract/repository/project/project-repository.interface";
import { AppError } from "../../../shared/error/app.error";
import type { AppOptions } from "../../../shared/types/app-options";
import { ApiResult } from "../../../shared/types/app-result";
import type { IUseCase } from "../../contract/use-case/use-case.interface";
import type { CreateProjectDto } from "../../dtos/project/create-project.dto";
import type { ProjectDto } from "../../dtos/project/project.dto";
import type { UpdateProjectDto } from '../../dtos/project/update-project.dto';
import type { IAppMapper } from '../../contract/mapper/app-mapper.interface';

export class FindAllProjectUseCase implements IUseCase<null,ProjectDto[]>{
    constructor(
        private readonly repository:IProjectRepository,
        private readonly mapper:IAppMapper<Project,ProjectDto,CreateProjectDto,UpdateProjectDto>) {}

    public async execute(_null: null, options?: AppOptions): Promise<ApiResult<ProjectDto[]>> {
        try {

            const projects=await this.repository.findAll(options);

            if(!projects){return ApiResult.fail<ProjectDto[]>(500,AppError.SERVER_ERROR.message);}
            
            const result=projects.map(this.mapper.toDto);
            
            return ApiResult.ok<ProjectDto[]>(200,result,`${projects.length} record(s) found`);

        } catch (error) {
            console.log(error);
            return ApiResult.fail<ProjectDto[]>(500,AppError.SERVER_ERROR.message);
            
        }
    }

}