import { Router } from "express";
import { apiStatePublicRoute } from "../sys-internall.route";
import { projectPublicRoute } from "../project.route";

const publicRoute=Router();

publicRoute.use("/",apiStatePublicRoute);

publicRoute.use("/projects",projectPublicRoute);

export {publicRoute}