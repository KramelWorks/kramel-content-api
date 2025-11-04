import { Router } from "express";
import { apiStatePublicRoute } from "./sys-internall.route";

const publicRoute=Router();

publicRoute.use(apiStatePublicRoute);

export {publicRoute}