"use client";

import PokemonCard from "./PokemonCard";

import {Pokemon} from "@/types";
interface Props {
  pokemons: Pokemon[];
}

function PokemonList({pokemons}: Props) {
  return (
    <ul className="w-100 grid list-none grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-8">
      {pokemons.map((pokemon, i) => {
        return (
          <PokemonCard
            key={pokemon.src}
            name={pokemon.name as string}
            src={pokemon.src}
            url={pokemon.url}
          />
        );
      })}
    </ul>
  );
}

export default PokemonList;
