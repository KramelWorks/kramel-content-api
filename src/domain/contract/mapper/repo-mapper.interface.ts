export interface IRepoMapper<TDomain,TPersistence>{

    toDomain(raw:TPersistence):TDomain;

    toPersistence(entity:TDomain):TPersistence;
    
}