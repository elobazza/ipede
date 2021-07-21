import { EntityRepository, Repository } from "typeorm";
import { Order } from "../entities/Order";

@EntityRepository(Order)
class OrderRepositories extends Repository<Order> { }

export { OrderRepositories };