import { getCustomRepository } from "typeorm";
import { OrderRepositories } from "../repositories/OrderRepositories";

interface IOrderRequest {
    situacao: number;
    data: string;
    hora: string;
    observacao: string;
    idComanda: string;
}

class CreateOrderService {
    async execute({ situacao, data, hora, observacao, idComanda }: IOrderRequest) {

        const orderRepositories = getCustomRepository(OrderRepositories);

        const order = orderRepositories.create({
            situacao, data, hora, observacao, idComanda
        });

        await orderRepositories.save(order);

        return order;
    }
}

export { CreateOrderService }