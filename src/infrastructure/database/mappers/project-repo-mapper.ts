import type { ProjectModel } from "@prisma/client";
import type { IRepoMapper } from "../../../domain/contract/mapper/repo-mapper.interface";
import { Project } from "../../../domain/entities/project/project.entity";
import type { ProjectState } from "../../../domain/entities/project/project-state.enum";

export class ProjectRepoMapper implements IRepoMapper<Project,ProjectModel>{

    toDomain(raw: ProjectModel): Project {
        return new Project({
            title:raw.title,
            description:raw.description ?? "",
            state:raw.state as ProjectState,
            slug:raw.slug,
            version:raw.version,
            tags:raw.tags ? raw.tags.split(','):[],
            blocks:(raw as any).blocks ?? [],
            id:raw.id,
            createAt:raw.createAt,
            updateAt:raw.updateAt,
            deletedAt:raw.deletedAt ?? undefined,
            tenantId:raw.tenantId ?? "",
            isActive:raw.isActive,
            isDeleted:raw.isDeleted,
        });
    }

    toPersistence(entity: Project): ProjectModel {
        return{
            title:entity.title,
            description:entity.description,
            state:entity.state,
            slug:entity.slug,
            version:entity.version,
            tags:entity.tags.join(','),
            id:entity.id,
            createAt:entity.createAt ?? new Date(),
            updateAt:entity.updateAt  ?? new Date(),
            deletedAt:entity.deletedAt ?? null,
            tenantId:entity.tenantId ?? "",
            isActive:entity.isActive,
            isDeleted:entity.isDeleted,
        }
    }
}