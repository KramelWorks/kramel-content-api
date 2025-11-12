import type { AppOptions } from "../../../shared/types/app-options";

export interface IDefaultRepository<T>{

    save(data:T):Promise<T>;

    update(id:string,data:T):Promise<T>;

    remove(id:string):Promise<boolean>;

    exists(id:string,options?:AppOptions):Promise<boolean>;

    findById(id:string,options?:AppOptions):Promise<T | null>

    findAll(options?:AppOptions):Promise<T[]>

}