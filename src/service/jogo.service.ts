import { jogoRepository } from "../repositories/jogo.repositorie.js"

class JogoService{
async getAll(){
    const jogos = await jogoRepository
    return jogos
}
}

export const jogoService = new JogoService()