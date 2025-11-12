import type { AppOptions } from "../../../../shared/types/app-options";
import type { Block } from "../../../entities/block/block.entity";
import type { IDefaultRepository } from "../default-repository.interface";

export interface IBlockRepository extends IDefaultRepository<Block>{

    findBySlug(slug:string,options?:AppOptions):Promise<Block[]>;

    findByTitle(title:string,options?:AppOptions):Promise<Block[]>;

    findByVersion(slug:string,version:number,options?:AppOptions):Promise<Block | null>;

    findLastVersion(slug:string,options?:AppOptions):Promise<Block | null>;

}