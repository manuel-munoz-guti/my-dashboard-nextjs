'use client';

import { useAppSelector } from '@/store';
import { PokemonGrid } from '..';
import { IoHeartOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';


export const PokemonFavoritesGrid = () => {
    
    const pokemonsFav = useAppSelector( state => Object.values(state.pokemons.favorites));
    
    return (
      <>
        {
            (pokemonsFav.length === 0)
            ? <NoFavorites />
            : <PokemonGrid pokemons={pokemonsFav} />
        }
      </>
    )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500"/>
      <span>No hay Favoritos</span>
    </div>
  )
}