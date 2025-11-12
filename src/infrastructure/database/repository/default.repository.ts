import { PaginationUtil } from './../../../shared/utils/pagination.util';
import type { IRepoMapper } from "../../../domain/contract/mapper/repo-mapper.interface";
import type { IDefaultRepository } from "../../../domain/contract/repository/default-repository.interface";
import type { AppOptions } from "../../../shared/types/app-options";

export class DefaultRepository<TDomain,TPersistence> implements IDefaultRepository<TDomain>{

    constructor(protected readonly prismaClient:{
            create: Function;
            update: Function;
            delete: Function;
            findFirst: Function;
            findMany: Function;
            findUnique: Function;  
        }
        ,protected readonly mapper:IRepoMapper<TDomain,TPersistence>) {
    }

    public async findById(id: string, options?: AppOptions): Promise<TDomain | null> {
        const record = await this.prismaClient.findFirst({
           where: { id,
               ...options?.includeInactive?{}:{isActive:true},
               ...options?.includeDeleted?{}:{isDeleted:false},
            },
         });
        const result =record ? this.mapper.toDomain(record) : null;
        return result;
    }

    public async findAll(options?: AppOptions): Promise<TDomain[]> {
        const {skip,take}=PaginationUtil.getParams(options);
        
        const records = await this.prismaClient.findMany({
           where: { 
               ...options?.includeInactive?{}:{isActive:true},
               ...options?.includeDeleted?{}:{isDeleted:false},
            },
            skip,
            take
         });
        const result=records.map(this.mapper.toDomain);
        return result;
    }

    public async save(data: TDomain): Promise<TDomain> {
        const newRecord=this.mapper.toPersistence(data)
        const record=await this.prismaClient.create({data:newRecord})
        const result=this.mapper.toDomain(record);
        return result;
    }

    public async update(id: string, data: TDomain): Promise<TDomain> {
        const updateRecord=this.mapper.toPersistence(data)
        const record=await this.prismaClient.update({where:{id},data:updateRecord})
        const result=this.mapper.toDomain(record);
        return result;
    }

    public async remove(id: string): Promise<boolean> {
        await this.prismaClient.delete({where:{id}})
        return true;
    }

    public async exists(id: string,options?:AppOptions): Promise<boolean> {
      const record = await this.prismaClient.findUnique({
        where: { id,
            ...options?.includeInactive?{}:{isActive:true},
            ...options?.includeDeleted?{}:{isDeleted:false},
         },
      });
      return !!(record && record.isActive && !record.isDeleted);
    }
}