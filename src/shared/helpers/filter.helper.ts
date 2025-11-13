import type { Request } from "express";
import type { ProjectFilterDto } from "../../application/dtos/project/project-filter.dto";
import type { ProjectState } from "../../domain/entities/project/project-state.enum";


export function parseProjectFilter(req: Request): ProjectFilterDto {
  return {
    title: req.query.title as string | undefined,
    slug: req.query.slug as string | undefined,
    status: req.query.status as ProjectState | undefined,
    version: req.query.version as string | undefined,
  };
}

export function parseBlockFilter(req: Request): ProjectFilterDto {
  return {
    title: req.query.title as string | undefined,
    slug: req.query.slug as string | undefined,
    version: req.query.version as string | undefined,
  };
}
