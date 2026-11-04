import { type Request, type Response } from "express";
import { jogoService } from "../service/jogo.service.js";

class JogoController {
  async getAll(req: Request, res: Response) {
    try {
      const jogos = await jogoService.getAll();
      return res.json(jogos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        erro: "erro",
      });
    }
  }
}

export const jogoController = new JogoController();
