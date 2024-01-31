import { PokemonFavoritesGrid } from "@/pokemons";

export const metadata = {
 title: 'Favoritos',
 description: 'Estos son los pokemons favoritos de Ash',
};

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokemons Favoritos <small className="text-blue-500">Global State</small></span>
      <PokemonFavoritesGrid />
    </div>
  );
}