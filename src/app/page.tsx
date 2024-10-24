"use client";
import {useEffect, useState} from "react";

import PokemonList from "@/components/PokemonList";
import Paginator from "@/components/Paginator";
import Divider from "@/components/Divider";
import {getPokemons} from "@/lib/utlis";
import {Pokemon} from "@/types";

export default function HomePage() {
  const [paginator, setPaginator] = useState({
    limit: 12,
    offset: 0,
  });
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchPokemons() {
      setPokemons(await getPokemons(paginator.offset));
    }
    fetchPokemons();
  }, [paginator.offset]);

  return (
    <section className="w-100 m-auto grid min-h-[80vh] grid-rows-[auto,auto,auto]">
      <div className="w-100">
        <h3 className="text-4xl font-bold text-red-500 dark:text-red-500">Pokédex</h3>
        <Divider />
      </div>
      <PokemonList pokemons={pokemons} />
      <Paginator paginator={paginator} setPaginator={setPaginator} />
    </section>
  );
}
