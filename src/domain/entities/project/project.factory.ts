import { randomUUID } from 'crypto';
import type { CreateProjectDto } from "../../../application/dtos/project/create-project.dto";
import type { UpdateProjectDto } from "../../../application/dtos/project/update-project.dto";
import { SlugUtil } from "../../../shared/utils/slug.util";
import type { IEntityFactory } from "../../contract/factory/entity-factory.interface";
import { ProjectState } from "./project-state.enum";
import { Project } from "./project.entity";

export class ProjectFactory implements IEntityFactory<Project,CreateProjectDto,UpdateProjectDto>{

    create(input: CreateProjectDto): Project {
        return new Project({
            id:randomUUID(),
            title:input.title,
            description:input.description,
            state:ProjectState.Draft,
            slug:SlugUtil.generate(input.title),
            version:0,
            tags:[],
            createAt:new Date(),
            updateAt:new Date(),
            deletedAt:undefined,
            tenantId:input.tenantId,
            isActive:true,
            isDeleted:false,
            blocks:[]
        });
    }

    update(input: UpdateProjectDto, entity: Project): Project {
       return new Project({
        ...entity.toProps(),
        title:input.title,
        description:input.description,
       });
    }

}