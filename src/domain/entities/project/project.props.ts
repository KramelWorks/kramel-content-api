import type { BaseProps } from "../base/base.props";
import type { Block } from "../block/block.entity";
import type { ProjectState } from "./project-state.enum";

export interface ProjectProps extends BaseProps{
    title:string;
    description:string;
    state:ProjectState;
    slug:string;
    version:number;
    tags:string[];
    blocks?:Block[];
} 