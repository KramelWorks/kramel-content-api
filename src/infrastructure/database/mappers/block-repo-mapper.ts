import type { BlockModel } from "@prisma/client";
import type { IRepoMapper } from "../../../domain/contract/mapper/repo-mapper.interface";
import { Block } from "../../../domain/entities/block/block.entity";

export class BlockRepoMapper implements IRepoMapper<Block,BlockModel>{

    toDomain(raw: BlockModel): Block {
        return new Block({
            version:raw.version,
            order:raw.order,
            slug:raw.slug,
            title:raw.title,
            description:raw.description ?? "",
            id:raw.id,
            projectId:raw.projectId,
            createAt:raw.createAt,
            updateAt:raw.updateAt,
            deletedAt:raw.deletedAt ?? undefined,
            tenantId:raw.tenantId ?? undefined,
            isActive:raw.isActive,
            isDeleted:raw.isDeleted,
        });
    }

    toPersistence(entity: Block): BlockModel {
        return{
            version:entity.version,
            order:entity.order,
            slug:entity.slug,
            title:entity.title,
            description:entity.description ?? "",
            id:entity.id,
            projectId:entity.projectId,
            createAt:entity.createAt ?? new Date(),
            updateAt:entity.updateAt  ?? new Date(),
            deletedAt:entity.deletedAt ?? null,
            tenantId:entity.tenantId ?? "",
            isActive:entity.isActive,
            isDeleted:entity.isDeleted,
        }
    }
}