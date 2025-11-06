import type { PrismaClient, ProjectModel } from "@prisma/client";
import type { IProjectRepository } from "../../../../domain/contract/repository/project/project-repository.interface";
import type { Project } from "../../../../domain/entities/project/project.entity";
import { DefaultRepository } from "../default.repository";
import type { AppOptions } from "../../../../shared/types/app-options";
import type { IRepoMapper } from "../../../../domain/contract/mapper/repo-mapper.interface";
import { PaginationUtil } from "../../../../shared/utils/pagination.util";

export class ProjectRepository extends DefaultRepository<Project,ProjectModel> implements IProjectRepository{

    constructor(private readonly prismaClent:PrismaClient,mapper:IRepoMapper<Project,ProjectModel>) {
        super(prismaClent.projectModel,mapper);
    }

    public async findBySlug(slug: string, options?: AppOptions): Promise<Project[]> {

        const {skip,take}=PaginationUtil.getParams(options);

        const records=await this.prismaClent.projectModel.findMany({where:{
            slug,
            ...options?.includeInactive?{}:{isActive:false},
            ...options?.includeDeleted?{}:{isDeleted:true}
            },
            include:{blocks:true},
            skip,
            take,
            orderBy:{version:"desc"}
        });
        const result=records.map(this.mapper.toDomain);
        return result;
    }

    public async findByTitle(title: string, options?: AppOptions): Promise<Project[]> {
        const {skip,take}=PaginationUtil.getParams(options);

        const records=await this.prismaClent.projectModel.findMany({where:{
            title:{
                contains:title
            },
            ...options?.includeInactive?{}:{isActive:false},
            ...options?.includeDeleted?{}:{isDeleted:true}
            },
            include:{blocks:true},
            skip,
            take,
            orderBy:{version:"desc"}
        });
        const result=records.map(this.mapper.toDomain);
        return result;
    }

    public async findByVersion(version: number, options?: AppOptions): Promise<Project | null> {
        const record=await this.prismaClent.projectModel.findFirst({where:{
            version,
            ...options?.includeInactive?{}:{isActive:false},
            ...options?.includeDeleted?{}:{isDeleted:true}
            },
            include:{blocks:true},
        });
        const result=record ? this.mapper.toDomain(record) : null;
        return result;
    }

     public async findLastVersion(slug: string, options?: AppOptions): Promise<Project | null> {
        const record=await this.prismaClent.projectModel.findFirst({where:{
            slug,
            ...options?.includeInactive?{}:{isActive:false},
            ...options?.includeDeleted?{}:{isDeleted:true}
            },
            orderBy:{version:"desc"}
        });
        const result=record ? this.mapper.toDomain(record) : null;
        return result;
    }
}