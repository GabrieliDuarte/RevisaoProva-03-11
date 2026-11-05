import { jogoRepository } from "../repositories/jogo.repositorie.js";
import type { CriarJogo } from "../types/jogo.type.js";

class JogoService {
  async getAll() {
    const jogos = await jogoRepository.getAll();
    return jogos;
  }
  async create(jogoData: CriarJogo): Promise<CriarJogo> {
    const jogo = await jogoRepository.create(jogoData);
    return jogo;
  }
}

export const jogoService = new JogoService();
