import { Router } from "express";
import { apiStatePrivateRoute } from "./sys-internall.route";

const privateRoute=Router();

privateRoute.use(apiStatePrivateRoute);

export {privateRoute}