import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon';

interface PokemonState {
    [key: string]: SimplePokemon,
}

const getInitialState = (): PokemonState => {
  const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');

  return favorites;
}

const initialState: PokemonState = {
  ...getInitialState()
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {

        const pokemon = action.payload;
        const { id } = pokemon;

        if(!!state[id]) {
            delete state[id];
        } else {
          state[id] = pokemon;
        }
    }
  }
});

export const { toggleFavorite } = pokemonSlice.actions

export default pokemonSlice.reducer