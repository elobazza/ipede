import { EntityRepository, Repository } from "typeorm";
import { Kitchen } from "../entities/Kitchen";

@EntityRepository(Kitchen)
class KitchenRepositories extends Repository<Kitchen> { }

export { KitchenRepositories };