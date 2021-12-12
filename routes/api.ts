import { PokemonController } from "../src/controllers/pokemon.controller";

export const Routes = [
    {
        method: "get",
        action: "index",
        route: "/pokemon",
        controller: PokemonController,
    },
    {
        method: "get",
        action: "get",
        route: "/pokemon/:id",
        controller: PokemonController,
    },
    {
        method: "post",
        action: "create",
        route: "/pokemon",
        controller: PokemonController, 
    },
    {
        method: "put",
        action: "update",
        route: "/pokemon/:id",
        controller: PokemonController, 
    },
    {
        method: "delete",
        action: "delete",
        route: "/pokemon/:id",
        controller: PokemonController,
    }
];