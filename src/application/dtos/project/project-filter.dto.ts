import type { ProjectState } from "../../../domain/entities/project/project-state.enum";

export interface ProjectFilterDto{
    title?:string,
    slug?:string,
    status?:ProjectState,
    version?:string,
}