import type { BaseProps } from "../base/base.props";

export interface BlockProps extends BaseProps{
    version:number;
    order:number;
    slug:string;
    title:string;
    description?:string;
}
