import { Request, Response } from "express";

import { CreateMenuItemService } from "../services/CreateMenuItemService";

class CreateMenuItemController {
    async handle(request: Request, response: Response) {
        const { nome, descricao, valorUnitario } = request.body;

        const createMenuItemService = new CreateMenuItemService();

        const menuItem = await createMenuItemService.execute({ nome, descricao, valorUnitario });

        return response.json(menuItem);
    }
}

export { CreateMenuItemController };