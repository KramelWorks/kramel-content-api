import { Router } from "express";
import { apiStatePrivateRoute } from "../sys-internall.route";
import { projectPrivateRoute } from "../project.route";
import { blockPrivateRoute } from "../block.route";

const privateRoute=Router();

privateRoute.use(apiStatePrivateRoute);

privateRoute.use("/projects",projectPrivateRoute);
privateRoute.use("/blocks",blockPrivateRoute);

export {privateRoute}