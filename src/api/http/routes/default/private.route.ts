import { Router } from "express";
import { apiStatePrivateRoute } from "../sys-internall.route";
import { projectPrivateRoute } from "../project.route";

const privateRoute=Router();

privateRoute.use(apiStatePrivateRoute);

privateRoute.use("/projects",projectPrivateRoute);

export {privateRoute}