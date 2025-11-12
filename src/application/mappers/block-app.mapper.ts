import type { IEntityFactory } from "../../domain/contract/factory/entity-factory.interface";
import type { Block } from "../../domain/entities/block/block.entity";
import type { IAppMapper } from "../contract/mapper/app-mapper.interface";
import type { BlockDto } from "../dtos/block/block.dto";
import type { CreateBlockDto } from "../dtos/block/create-block.dto";
import type { UpdateBlockDto } from "../dtos/block/update-block.dto";

export class BlockAppMapper implements IAppMapper<Block,BlockDto,CreateBlockDto,UpdateBlockDto>{


    constructor(private readonly factory:IEntityFactory<Block,CreateBlockDto,UpdateBlockDto>) {
        
    }

    create(input: CreateBlockDto): Block {
        return this.factory.create(input);
    }

    update(input: UpdateBlockDto, entity: Block): Block {
        return this.factory.update(input,entity);
    }

    toDto(entity: Block): BlockDto {
        return {
            version:entity.version,
            order:entity.order,
            slug:entity.slug,
            title:entity.title,
            description:entity.description,
            projectId:entity.projectId,
            id:entity.id,
            createAt:entity.createAt,
            updateAt:entity.updateAt,
            deletedAt:entity.deletedAt,
            tenantId:entity.tenantId,
            isActive:entity.isActive,
            isDeleted:entity.isDeleted,
        }
    }

}