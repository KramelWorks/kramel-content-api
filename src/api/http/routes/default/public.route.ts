import { Router } from "express";
import { apiStatePublicRoute } from "../sys-internall.route";
import { projectPublicRoute } from "../project.route";
import { blockPublicRoute } from "../block.route";

const publicRoute=Router();

publicRoute.use("/",apiStatePublicRoute);

publicRoute.use("/projects",projectPublicRoute);
publicRoute.use("/blocks",blockPublicRoute);

export {publicRoute}