import type { AppOptions } from "../types/app-options";

export interface PaginationParams {
  skip: number;
  take: number;
}

export class PaginationUtil{
    public static getParams(opptions?:AppOptions):PaginationParams{
        const page = Math.max(opptions?.page ?? 1,1);
        const pageSize = Math.max(opptions?.pageSize ?? 10,1);
        const skip = (page -1) * pageSize;
        const take = pageSize;
        return{skip,take}
    }
}