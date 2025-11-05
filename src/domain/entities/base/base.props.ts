export interface BaseProps{
    createAt?:Date;
    updateAt?:Date;
    deletedAt?:Date;
    tenantId?:string;
    isActive:boolean;
    isDeleted:boolean
}
