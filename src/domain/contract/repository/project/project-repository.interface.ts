import type { AppOptions } from "../../../../shared/types/app-options";
import type { Project } from "../../../entities/project/project.entity";
import type { IDefaultRepository } from "../default-repository.interface";

export interface IProjectRepository extends IDefaultRepository<Project>{

    findBySlug(slug:string,options?:AppOptions):Promise<Project[]>;

    findByTitle(title:string,options?:AppOptions):Promise<Project[]>;

    findByVersion(slug:string,version:number,options?:AppOptions):Promise<Project | null>;

    findLastVersion(slug:string,options?:AppOptions):Promise<Project | null>;

}