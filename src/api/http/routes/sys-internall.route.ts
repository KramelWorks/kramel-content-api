import { Router } from "express";
import { apiStateController } from "../../composition/sys-internal.compose";

const apiStatePublicRoute=Router();
const apiStatePrivateRoute=Router();

apiStatePublicRoute.get("/",apiStateController.apiState.bind(apiStateController))

export {apiStatePublicRoute,apiStatePrivateRoute}