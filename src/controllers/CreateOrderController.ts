import { Request, Response } from "express";
import { CreateOrderService } from "../services/CreateOrderService";

class CreateOrderController {
    async handle(request: Request, response: Response) {
        const { observacao, idComanda } = request.body;

        const situacao = 1;
        const [data, hora] = new Date().toLocaleString().split(" ");

        const createOrderService = new CreateOrderService();

        const order = await createOrderService.execute({ situacao, data, hora, observacao, idComanda });

        return response.json(order);
    }
}

export { CreateOrderController };