import { Request, Response } from "express";
import { CreateOrderItemService } from "../services/CreateOrderItemService";

class CreateOrderItemController {
    async handle(request: Request, response: Response) {
        const { quantidade, idItemCardapio, idPedido } = request.body;

        const createOrderItemService = new CreateOrderItemService();

        const orderItem = await createOrderItemService.execute({ quantidade, idItemCardapio, idPedido });

        return response.json(orderItem);
    }
}

export { CreateOrderItemController };