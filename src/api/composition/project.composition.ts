import { PrismaClient } from "@prisma/client";
import { ProjectRepoMapper } from "../../infrastructure/database/mappers/project-repo-mapper";
import { BlockRepoMapper } from "../../infrastructure/database/mappers/block-repo-mapper";
import { ProjectFactory } from "../../domain/entities/project/project.factory";
import { ProjectAppMapper } from "../../application/mappers/project-app.mapper";
import { ProjectRepository } from "../../infrastructure/database/repository/project/project.repository";
import { ActivatedProjectUseCase, AddBlockProjectUseCase, AddTagProjectUseCase, CreateProjectUseCase, DeactivatedProjectUseCase, FindAllProjectUseCase, FindByIdProjectUseCase, FindBySlugProjectUseCase, FindByTitleProjectUseCase, FindByVersionProjectUseCase, FindLastVersionProjectUseCase, RemoveBlockProjectUseCase, RemoveProjectUseCase, RemoveTagProjectUseCase, RestoreProjectUseCase, UpdateProjectUseCase } from "../../application/use-cases/project";
import { BlockRepository } from "../../infrastructure/database/repository/block/block.repository";
import { ProjectCrudController, ProjectLifecycleController, ProjectContentController, ProjectQueryController } from "../http/controllers/project";

const prisma=new PrismaClient();

//MAPPERS
const projectRepoMapper=new ProjectRepoMapper();
const blockRepoMapper=new BlockRepoMapper();

const projectFactory=new ProjectFactory()
const projectAppMapper=new ProjectAppMapper(projectFactory);

//REPOSITORYS
const repository=new ProjectRepository(prisma,projectRepoMapper);
const blockRepository=new BlockRepository(prisma,blockRepoMapper)


const activatedProjectUseCase=new ActivatedProjectUseCase(repository,projectAppMapper);
const addBlockProjectUseCase=new AddBlockProjectUseCase(repository,blockRepository,projectAppMapper);
const addTagProjectUseCase=new AddTagProjectUseCase(repository,projectAppMapper);
const createProjectUseCase=new CreateProjectUseCase(repository,projectAppMapper);
const deactivatedProjectUseCase=new DeactivatedProjectUseCase(repository,projectAppMapper);
const findAllProjectUseCase=new FindAllProjectUseCase(repository,projectAppMapper);
const findByIdProjectUseCase=new FindByIdProjectUseCase(repository,projectAppMapper);
const findBySlugProjectUseCase=new FindBySlugProjectUseCase(repository,projectAppMapper);
const findByTitleProjectUseCase=new FindByTitleProjectUseCase(repository,projectAppMapper);
const findByVersionProjectUseCase=new FindByVersionProjectUseCase(repository,projectAppMapper);
const findLastVersionProjectUseCase=new FindLastVersionProjectUseCase(repository,projectAppMapper);
const removeBlockProjectUseCase=new RemoveBlockProjectUseCase(repository,blockRepository,projectAppMapper);
const removeProjectUseCase=new RemoveProjectUseCase(repository);
const removeTagProjectUseCase=new RemoveTagProjectUseCase(repository,projectAppMapper);
const restoreProjectUseCase=new RestoreProjectUseCase(repository,projectAppMapper);
const updateProjectUseCase=new UpdateProjectUseCase(repository,projectAppMapper);


const projectCrudController=new ProjectCrudController(
    createProjectUseCase,
    removeProjectUseCase,
    updateProjectUseCase
);

const projectLifecycleController=new ProjectLifecycleController(
    activatedProjectUseCase,
    deactivatedProjectUseCase,
    restoreProjectUseCase,
);

const projectContentController=new ProjectContentController(
    addBlockProjectUseCase,
    addTagProjectUseCase,
    removeBlockProjectUseCase,
    removeTagProjectUseCase
);

const projectQueryController=new ProjectQueryController(
    findAllProjectUseCase,
    findByIdProjectUseCase,
    findBySlugProjectUseCase,
    findByTitleProjectUseCase,
    findByVersionProjectUseCase,
    findLastVersionProjectUseCase
);


export {projectCrudController,projectLifecycleController,projectContentController,projectQueryController}