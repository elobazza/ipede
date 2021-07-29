import { Request, Response } from "express";
import { ListMenuItemService } from "../services/ListMenuItemService";

class ListMenuItemController {
    async handle(request: Request, response: Response) {
        const listMenuItemService = new ListMenuItemService();

        const menuItems = await listMenuItemService.execute();

        return response.json(menuItems);
    }
}

export { ListMenuItemController };