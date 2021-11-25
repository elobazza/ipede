import { Router } from "express";
import { AuthenticateAdministratorController } from "./controllers/AuthenticateAdministratorController";
import { AuthenticateKitchenController } from "./controllers/AuthenticateKitchenController";
import { AuthenticateTableController } from "./controllers/AuthenticateTableController";
import { CloseCommandController } from "./controllers/CloseCommandController";
import { CreateAdministratorController } from "./controllers/CreateAdministratorController";
import { CreateCommandController } from "./controllers/CreateCommandController";
import { CreateKitchenController } from "./controllers/CreateKitchenController";
import { CreateMenuItemController } from "./controllers/CreateMenuItemController";
import { CreateOrderController } from "./controllers/CreateOrderController";
import { CreateOrderItemController } from "./controllers/CreateOrderItemController";
import { CreateTableController } from "./controllers/CreateTableController";
import { ListMenuItemController } from "./controllers/ListMenuItemController";
import { ListOpenCommandController } from "./controllers/ListOpenCommandController";
import { ListTableController } from "./controllers/ListTableController";
import { ShowCommandController } from "./controllers/ShowCommandController";

const router = Router();

// CREATES

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

// AUTHENTICATES

const authenticateAdministratorController = new AuthenticateAdministratorController();
router.post("/administrator/login", authenticateAdministratorController.handle);

const authenticateKitchenController = new AuthenticateKitchenController();
router.post("/kitchen/login", authenticateKitchenController.handle);

const authenticateTableController = new AuthenticateTableController();
router.post("/table/login", authenticateTableController.handle);

// UPDATES

const closeCommandController = new CloseCommandController();
router.put("/command/:id", closeCommandController.handle);

// LISTS AND SHOWS

const showCommandController = new ShowCommandController();
router.get("/command/:id", showCommandController.handle);

const listTableController = new ListTableController();
router.get("/tables", listTableController.handle);

const listOpenCommandController = new ListOpenCommandController();
router.get("/commands", listOpenCommandController.handle);

const listMenuItemController = new ListMenuItemController();
router.get("/menuitems", listMenuItemController.handle);


export { router };