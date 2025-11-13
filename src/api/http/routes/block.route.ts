import { Router } from "express";
import { blockQueryController, blockCrudController, blockContentController, blockLifecycleController } from "../../composition/block.composition";

const blockPublicRoute=Router();

const blockPrivateRoute=Router();


blockPrivateRoute.get("/",blockQueryController.find.bind(blockQueryController));
blockPrivateRoute.get("/:id",blockQueryController.findById.bind(blockQueryController));

blockPrivateRoute.post("/",blockCrudController.create.bind(blockCrudController));
blockPrivateRoute.put("/:id",blockCrudController.update.bind(blockCrudController));
blockPrivateRoute.delete("/:id",blockCrudController.remove.bind(blockCrudController));

blockPrivateRoute.post("/:id/order",blockContentController.changeOrder.bind(blockContentController));
blockPrivateRoute.post("/:id/project",blockContentController.changeProject.bind(blockContentController));

blockPrivateRoute.patch("/:id/activate",blockLifecycleController.activate.bind(blockLifecycleController));
blockPrivateRoute.patch("/:id/deactivate",blockLifecycleController.deactivate.bind(blockLifecycleController));
blockPrivateRoute.post("/:id/restore",blockLifecycleController.restore.bind(blockLifecycleController));

export {blockPublicRoute,blockPrivateRoute}