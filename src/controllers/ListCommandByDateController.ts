import { Request, Response } from "express";
import { ListCommandByDateService } from "../services/ListCommandByDateService";

class ListCommandByDateController {
    async handle(request: Request, response: Response) {
        const { data } = request.params;

        const listCommandByDateService = new ListCommandByDateService();

        const commands = await listCommandByDateService.execute(
            data
        );

        return response.json(commands);
    }
}

export { ListCommandByDateController };