import { Request, Response } from "express";
import { ListTableService } from "../services/ListTableService";

class ListTableController {
    async handle(request: Request, response: Response) {
        const listTableService = new ListTableService();

        const tables = await listTableService.execute();

        return response.json(tables);
    }
}

export { ListTableController };