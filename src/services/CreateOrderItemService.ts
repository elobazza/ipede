import { getCustomRepository } from "typeorm";
import { OrderItemRepositories } from "../repositories/OrderItemRepositories";

interface IOrderItemRequest {
    quantidade: number;
    idItemCardapio: string;
    idPedido: string;
}

class CreateOrderItemService {
    async execute({ quantidade, idItemCardapio, idPedido }: IOrderItemRequest) {

        const orderItemRepositories = getCustomRepository(OrderItemRepositories);

        const orderItem = orderItemRepositories.create({
            quantidade, idItemCardapio, idPedido
        });

        await orderItemRepositories.save(orderItem);

        return orderItem;
    }
}

export { CreateOrderItemService }