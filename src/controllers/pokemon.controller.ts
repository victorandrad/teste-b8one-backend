import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Pokemon } from "../entities/Pokemon";

export class PokemonController {

    private pokemonRepository = getRepository(Pokemon);

    async index(request: Request, response: Response, next: NextFunction) {
        return this.pokemonRepository.find();
    }

    async get(request: Request, response: Response, next: NextFunction) {
        return this.pokemonRepository.findOneOrFail(request.params.id);
    }

    async create(request: Request, response: Response, next: NextFunction) {
        return this.pokemonRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let pokemonToUpdate = await this.pokemonRepository.findOneOrFail(request.params.id);
        return this.pokemonRepository.update(pokemonToUpdate, request.body);
    }

    async delete(request: Request, response: Response, next: NextFunction) {
        let pokemonToRemove = await this.pokemonRepository.findOneOrFail(request.params.id);
        return this.pokemonRepository.remove(pokemonToRemove);
    }
}