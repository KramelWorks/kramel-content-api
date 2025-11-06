export interface BaseDto{
    id:string;
    createAt?:Date;
    updateAt?:Date;
    deletedAt?:Date;
    tenantId?:string;
    isActive:boolean;
    isDeleted:boolean  
}