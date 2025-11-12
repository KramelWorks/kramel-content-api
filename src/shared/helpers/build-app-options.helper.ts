import type { Request } from "express";
import type { AppOptions } from "../types/app-options";

export function buildAppOptions(req:Request):AppOptions{
    return{
        includeInactive: req.query.includeInactive === "true",
        includeDeleted: req.query.includeDeleted === "true",
        force: req.query.force === "true",
        page:parseInt(req.query.page as string, 10) || 1,
        pageSize:parseInt(req.query.pageSize as string, 10) || 10   
    }
}