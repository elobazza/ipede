import { EntityRepository, Repository } from "typeorm";
import { OrderItem } from "../entities/OrderItem";

@EntityRepository(OrderItem)
class OrderItemRepositories extends Repository<OrderItem> { }

export { OrderItemRepositories };