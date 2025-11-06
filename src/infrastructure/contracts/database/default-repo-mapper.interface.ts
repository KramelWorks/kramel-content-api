export interface IDefaultRepoMapper<TDomain,TPersistence>{

    toDomain(raw:TPersistence):TDomain;

    toPersistence(entity:TDomain):TPersistence;
    
}