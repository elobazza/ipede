import { getCustomRepository } from "typeorm";
import { MenuItemRepositories } from "../repositories/MenuItemRepositories";

class ListMenuItemService {
    async execute() {
        const menuItemRepositories = getCustomRepository(MenuItemRepositories);

        const menuItems = await menuItemRepositories.find();

        return menuItems;
    }
}

export { ListMenuItemService };