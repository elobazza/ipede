import { EntityRepository, Repository } from "typeorm";
import { MenuItem } from "../entities/MenuItem";

@EntityRepository(MenuItem)
class MenuItemRepositories extends Repository<MenuItem> { }

export { MenuItemRepositories };