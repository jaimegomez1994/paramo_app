import Listing from '../listing';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import React, { useEffect } from 'react';
import OrderBy from '../orderBy';
import Search from '../search/Search';
import { updatePokemonsToShow } from '../listing/pokemonsToShowSlice';


import {
    updatePokemons,
} from './pokemonsSlice';


import { useDispatch } from 'react-redux';

const Container = () => {
  const dispatch = useDispatch();
  const client = new ApolloClient({
    uri: 'https://beta.pokeapi.co/graphql/v1beta',
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    getPokemonData();
  }, [])

  const getPokemonData = async () => {
    try {
      console.time('pokeApi');
      const resp= await client
        .query({
          query: gql`
          query MyQuery {
            pokemon_v2_pokemonsprites {
              id
              pokemon_id
              pokemon_v2_pokemon {
                name
                weight
                order
                base_experience
                height
              }
              sprites
            }
          }
          `,
        })
      console.timeEnd('pokeApi');
      const data = getCorrectImages(resp.data.pokemon_v2_pokemonsprites);
      dispatch(updatePokemons(data));
      dispatch(updatePokemonsToShow(data.slice(0, 19)));
    } catch (error) {
      console.log(error);
    }
  }

  const getCorrectImages = (data) => {
    return data.map(d => {
      let sprites =  JSON.parse(d.sprites);
      let newSprite = sprites.other?.home?.front_default;
      return { ...d, sprites: newSprite }
    });
  }

  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <Search/>
        <OrderBy/>
      </div>
      <Listing />  
    </>
  );
}

export default Container;