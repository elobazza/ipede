import { Request, Response } from "express";
import { ShowCommandService } from "../services/ShowCommandService";

class ShowCommandController {
    async handle(request: Request, response: Response) {
        const { idComanda } = request.params;

        const showCommandService = new ShowCommandService();

        const command = await showCommandService.execute(idComanda);

        return response.json(command);
    }
}

export { ShowCommandController };