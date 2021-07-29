import { Router } from "express";
import { CreateAdministratorController } from "./controllers/CreateAdministratorController";
import { CreateCommandController } from "./controllers/CreateCommandController";
import { CreateKitchenController } from "./controllers/CreateKitchenController";
import { CreateMenuItemController } from "./controllers/CreateMenuItemController";
import { CreateOrderController } from "./controllers/CreateOrderController";
import { CreateOrderItemController } from "./controllers/CreateOrderItemController";
import { CreateTableController } from "./controllers/CreateTableController";

const router = Router();

const createAdministratorController = new CreateAdministratorController();
router.post("/administrator", createAdministratorController.handle);

const createKitchenController = new CreateKitchenController();
router.post("/kitchen", createKitchenController.handle);

const createTableController = new CreateTableController();
router.post("/table", createTableController.handle);

const createCommandController = new CreateCommandController();
router.post("/command", createCommandController.handle);

const createMenuItemController = new CreateMenuItemController();
router.post("/menuitem", createMenuItemController.handle);

const createOrderController = new CreateOrderController();
router.post("/order", createOrderController.handle);

const createOrderItemController = new CreateOrderItemController();
router.post("/orderitem", createOrderItemController.handle);

export { router };