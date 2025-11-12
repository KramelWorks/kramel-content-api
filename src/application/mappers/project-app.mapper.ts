import type { IEntityFactory } from "../../domain/contract/factory/entity-factory.interface";
import type { Project } from "../../domain/entities/project/project.entity";
import type { IAppMapper } from "../contract/mapper/app-mapper.interface";
import type { CreateProjectDto } from "../dtos/project/create-project.dto";
import type { ProjectDto } from "../dtos/project/project.dto";
import type { UpdateProjectDto } from "../dtos/project/update-project.dto";

export class ProjectAppMapper implements IAppMapper<Project,ProjectDto,CreateProjectDto,UpdateProjectDto>{


    constructor(private readonly factory:IEntityFactory<Project,CreateProjectDto,UpdateProjectDto>) {
        
    }

    create(input: CreateProjectDto): Project {
        return this.factory.create(input);
    }

    update(input: UpdateProjectDto, entity: Project): Project {
        return this.factory.update(input,entity);
    }

    toDto(entity: Project): ProjectDto {
        return {
            id:entity.id,
            title:entity.title,
            description:entity.description,
            state:entity.state,
            slug:entity.slug,
            version:entity.version,
            tags:entity.tags,
            blocks:entity.blocks ?? [],
            createAt:entity.createAt,
            updateAt:entity.updateAt,
            deletedAt:entity.deletedAt,
            tenantId:entity.tenantId,
            isActive:entity.isActive,
            isDeleted:entity.isDeleted,
        }
    }

}