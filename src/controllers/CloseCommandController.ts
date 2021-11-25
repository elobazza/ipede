import { Request, Response } from "express";
import { CloseCommandService } from "../services/CloseCommandService";

class CloseCommandController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const closeCommandService = new CloseCommandService();

        await closeCommandService.execute(id);
    }
}

export { CloseCommandController };