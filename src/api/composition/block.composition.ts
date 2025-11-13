import { BlockCrudController } from './../http/controllers/block/block-crud.controller';
import { BlockRepository } from './../../infrastructure/database/repository/block/block.repository';
import { PrismaClient } from "@prisma/client";
import { BlockAppMapper } from "../../application/mappers/block-app.mapper";
import { BlockFactory } from "../../domain/entities/block/block.factory";
import { BlockRepoMapper } from "../../infrastructure/database/mappers/block-repo-mapper";
import { ActivatedBlockUseCase, ChangeOrderBlockUseCase, ChangeProjectBlockUseCase, CreateBlockUseCase, DeactivatedBlockUseCase, FindAllBlockUseCase, FindByIdBlockUseCase, FindBySlugBlockUseCase, FindByVersionBlockUseCase, FindLastVersionBlockUseCase, RemoveBlockUseCase, RestoreBlockUseCase, UpdateBlockUseCase } from '../../application/use-cases/block';
import { BlockContentController, BlockLifecycleController, BlockQueryController } from '../http/controllers/block';
import { FindByTitleBlockUseCase } from '../../application/use-cases/block/find-by-title-block.usecase';

const prisma=new PrismaClient();

const blockRepoMapper=new BlockRepoMapper()

const blockFactory=new BlockFactory()
const blockAppMapper=new BlockAppMapper(blockFactory)

const repository=new BlockRepository(prisma,blockRepoMapper);

const activatedBlockUseCase=new ActivatedBlockUseCase(repository,blockAppMapper);
const changeOrderBlockUseCase=new ChangeOrderBlockUseCase(repository,blockAppMapper);
const changeProjectBlockUseCase=new ChangeProjectBlockUseCase(repository,blockAppMapper);
const createBlockUseCase=new CreateBlockUseCase(repository,blockAppMapper);
const deactivatedBlockUseCase=new DeactivatedBlockUseCase(repository,blockAppMapper);
const findAllBlockUseCase=new FindAllBlockUseCase(repository,blockAppMapper);
const findByIdBlockUseCase=new FindByIdBlockUseCase(repository,blockAppMapper);
const findBySlugBlockUseCase=new FindBySlugBlockUseCase(repository,blockAppMapper);
const findByVersionBlockUseCase=new FindByVersionBlockUseCase(repository,blockAppMapper);
const findByTitleBlockUseCase=new FindByTitleBlockUseCase(repository,blockAppMapper);
const findLastVersionBlockUseCase=new FindLastVersionBlockUseCase(repository,blockAppMapper);
const removeBlockUseCase=new RemoveBlockUseCase(repository);
const restoreBlockUseCase=new RestoreBlockUseCase(repository,blockAppMapper);
const updateBlockUseCase=new UpdateBlockUseCase(repository,blockAppMapper);


const blockCrudController=new BlockCrudController(
    createBlockUseCase,
    removeBlockUseCase,
    updateBlockUseCase,
)

const blockLifecycleController=new BlockLifecycleController(
    activatedBlockUseCase,
    deactivatedBlockUseCase,
    restoreBlockUseCase,
)

const blockContentController=new BlockContentController(
    changeOrderBlockUseCase,
    changeProjectBlockUseCase
)

const blockQueryController=new BlockQueryController(
    findAllBlockUseCase,
    findByIdBlockUseCase,
    findBySlugBlockUseCase,
    findByTitleBlockUseCase,
    findByVersionBlockUseCase,
    findLastVersionBlockUseCase
)

export {blockCrudController,blockLifecycleController,blockContentController,blockQueryController}
