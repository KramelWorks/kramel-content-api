import { randomUUID } from 'crypto';
import type { CreateBlockDto } from "../../../application/dtos/block/create-block.dto";
import type { UpdateBlockDto } from "../../../application/dtos/block/update-block.dto";
import { SlugUtil } from "../../../shared/utils/slug.util";
import type { IEntityFactory } from "../../contract/factory/entity-factory.interface";
import { Block } from "./block.entity";

export class BlockFactory implements IEntityFactory<Block,CreateBlockDto,UpdateBlockDto>{

    create(input: CreateBlockDto): Block {
        return new Block({
            id:randomUUID(),
            version:0,
            order:1,
            slug:SlugUtil.generate(input.title),
            title:input.title,
            description:input.description,
            projectId:input.projectId,
            createAt:new Date(),
            updateAt:new Date(),
            deletedAt:undefined,
            tenantId:input.tenantId,
            isActive:true,
            isDeleted:false,
        });
    }

    update(input: UpdateBlockDto, entity: Block): Block {
        return new Block({
            ...entity.toProps(),
            title:input.title,
            description:input.description,
        });
    }

    
}