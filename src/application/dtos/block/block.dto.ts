import type { BaseDto } from "../base/base.dto";

export interface BlockDto extends BaseDto{
    projectId:string;    
    version:number;
    order:number;
    slug:string;
    title:string;
    description?:string;
}