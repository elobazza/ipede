import { Request, Response } from "express";
import { ListOpenCommandService } from "../services/ListOpenCommandService";

class ListOpenCommandController {
    async handle(request: Request, response: Response) {

        const listCommandService = new ListOpenCommandService();

        const commands = await listCommandService.execute();

        return response.json(commands);
    }
}

export { ListOpenCommandController };