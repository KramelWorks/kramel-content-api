import type { BlockModel, PrismaClient } from "@prisma/client";
import type { Block } from "../../../../domain/entities/block/block.entity";
import { DefaultRepository } from "../default.repository";
import type { IBlockRepository } from "../../../../domain/contract/repository/block/block-repository.interface";
import type { AppOptions } from "../../../../shared/types/app-options";
import type { IRepoMapper } from "../../../../domain/contract/mapper/repo-mapper.interface";
import { PaginationUtil } from "../../../../shared/utils/pagination.util";

export class BlockRepository extends DefaultRepository<Block,BlockModel> implements IBlockRepository{

    constructor(private readonly prismaClent:PrismaClient,mapper:IRepoMapper<Block,BlockModel>) {
        super(prismaClent.blockModel,mapper);
        
    }

    public async findBySlug(slug: string, options?: AppOptions): Promise<Block[]> {
        const {skip,take}=PaginationUtil.getParams(options);

        const records=await this.prismaClent.blockModel.findMany({where:{
            slug,
            ...options?.includeInactive?{}:{isActive:false},
            ...options?.includeDeleted?{}:{isDeleted:true}
            },
            skip,
            take,
            orderBy:{version:"desc"}
        });
        const result=records.map(this.mapper.toDomain);
        return result;
    }

    public async findByTitle(title: string, options?: AppOptions): Promise<Block[]> {
        const {skip,take}=PaginationUtil.getParams(options);

        const records=await this.prismaClent.blockModel.findMany({where:{
            title:{
                contains:title
            },
            ...options?.includeInactive?{}:{isActive:false},
            ...options?.includeDeleted?{}:{isDeleted:true}
            },
            skip,
            take,
            orderBy:{version:"desc"}
        });
        const result=records.map(this.mapper.toDomain);
        return result;
    }

    public async findByVersion(version: number, options?: AppOptions): Promise<Block | null> {
        const record=await this.prismaClent.blockModel.findFirst({where:{
            version,
            ...options?.includeInactive?{}:{isActive:false},
            ...options?.includeDeleted?{}:{isDeleted:true}
            },
        });
        const result=record ? this.mapper.toDomain(record) : null;
        return result;
    }

    public async findLastVersion(slug: string, options?: AppOptions): Promise<Block | null> {
        const record=await this.prismaClent.blockModel.findFirst({where:{
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