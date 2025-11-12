import { Router } from "express";
import { projectContentController, projectCrudController, projectLifecycleController, projectQueryController } from "../../composition/project.composition";

const projectPublicRoute=Router();

const projectPrivateRoute=Router();


projectPrivateRoute.get("/",projectQueryController.find.bind(projectQueryController));
projectPrivateRoute.get("/:id",projectQueryController.findById.bind(projectQueryController));

projectPrivateRoute.post("/",projectCrudController.create.bind(projectCrudController));
projectPrivateRoute.put("/:id",projectCrudController.update.bind(projectCrudController));
projectPrivateRoute.delete("/:id",projectCrudController.remove.bind(projectCrudController));

projectPrivateRoute.post("/:id/blocks",projectContentController.addBlock.bind(projectContentController));
projectPrivateRoute.delete("/:id/blocks",projectContentController.removeBlock.bind(projectContentController));
projectPrivateRoute.post("/:id/tags",projectContentController.addTag.bind(projectContentController));
projectPrivateRoute.delete("/:id/tags",projectContentController.removeTag.bind(projectContentController));

projectPrivateRoute.patch("/:id/activate",projectLifecycleController.activate.bind(projectLifecycleController));
projectPrivateRoute.patch("/:id/deactivate",projectLifecycleController.deactivate.bind(projectLifecycleController));
projectPrivateRoute.post("/:id/restore",projectLifecycleController.restore.bind(projectLifecycleController));

export {projectPublicRoute,projectPrivateRoute}