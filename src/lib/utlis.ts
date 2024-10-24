
import {PokeApiResponse, Pokemon, Result, SinglePokemonResponse} from "@/types";

export async function getPokemons(offset: number) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`);
  const {results} = (await response.json()) as PokeApiResponse;

  const pokemons = results?.map((res) => {
    const index = Number(res.url?.split("/pokemon/")[1].slice(0, -1));

    return {
      name: res?.name,
      src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`,
      url: res?.url,
    };
  });

  return pokemons as Pokemon[];
}

export async function getTypes(url: string) {
  const typesFetching = await fetch(url as string);
  const {types} = (await typesFetching.json()) as SinglePokemonResponse;

  const typesArray = types?.map((type) => type?.type?.name) as string[];

  return typesArray;
}
