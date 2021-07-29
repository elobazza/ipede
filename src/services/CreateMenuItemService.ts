import { getCustomRepository } from "typeorm";
import { MenuItemRepositories } from "../repositories/MenuItemRepositories";

interface IMenuItemRequest {
    nome: string;
    descricao: string;
    valorUnitario: number;
}

class CreateMenuItemService {
    async execute({ nome, descricao, valorUnitario }: IMenuItemRequest) {

        const menuItemRepositories = getCustomRepository(MenuItemRepositories);

        const menuItemAlreadyExists = await menuItemRepositories.findOne({
            nome,
        });

        if (menuItemAlreadyExists) {
            throw new Error("Menu Item already exists");
        }

        const menuItem = menuItemRepositories.create({
            nome, descricao, valorUnitario
        });

        await menuItemRepositories.save(menuItem);

        return menuItem;
    }
}

export { CreateMenuItemService }