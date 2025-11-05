import type { ProjectState } from "../../../domain/entities/project/project-state.enum";
import type { BaseDto } from "../base/base.dto";

export interface ProjectDto extends BaseDto{
    title:string;
    description:string;
    state:ProjectState;
    slug:string;
    version:number;
    tags:string[];
}