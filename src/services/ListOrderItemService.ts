import { getCustomRepository } from "typeorm";
import { OrderRepositories } from "../repositories/OrderRepositories";

class ListOrderItemService {
    async execute() {
        const orderRepositories = getCustomRepository(OrderRepositories);

        const data = Date.now();

        const orders = await orderRepositories.find({

        });

        return orders;
    }
}

export { ListOrderItemService };