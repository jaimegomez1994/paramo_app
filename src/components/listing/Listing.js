import React, { useCallback, useRef, useState, useEffect } from 'react';
import debounce from "just-debounce-it";

import {
    selectPokemons
} from '../container/pokemonsSlice';

import { updatePokemonsToShow, selectPokemonsToShow } from './pokemonsToShowSlice';

import { selectPokemonToSearch } from '../search/pokemonToSearchSlice';

import { useSelector, useDispatch } from 'react-redux';

const Listing = () => {
  const dispatch = useDispatch();
  const pokemonsToShow = useSelector(selectPokemonsToShow);
  const pokemonToSearch = useSelector(selectPokemonToSearch);
  const [sliceMultiples, setSliceMultiples] = useState(2);
  const pokemonsRedux = useSelector(selectPokemons);
  const [showDetail, setShowDetail] = useState([false, '']);
  

  const bottom = useRef(null);
  
    const handleObserver = useCallback(debounce((entries) => {
        const target = entries[0];
        if (target.isIntersecting && pokemonsToShow.length > 0 && !pokemonToSearch ) { 
        dispatch(updatePokemonsToShow([...pokemonsToShow, ...pokemonsRedux.slice(pokemonsToShow.length, (10 * sliceMultiples))]));
        setSliceMultiples((prev) => prev + 1);
      }
    },500),[pokemonToSearch, pokemonsToShow])
  
    useEffect(() => {
        const option = {
        root: null,
        rootMargin: "5px",
        threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (bottom.current) observer.observe(bottom.current);
        return () => observer.disconnect();
    }, [handleObserver]);
    
    return (
      <>
      <div className='container'>
          { pokemonsToShow && Array.from(pokemonsToShow).length >0 && Array.from(pokemonsToShow).map(data => {
        return (
          <div
            key={data.id}
            onClick={() => setShowDetail([!showDetail[0], data.id])}
            className="d-flex flex-column align-items-center"
          >
            <img
                alt={`${data.pokemon_v2_pokemon.name}`}
                src={data?.sprites?.length>0?data.sprites:'https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg'}
                height={300}
              width={300}></img>
            <div>
              <h3>{data.pokemon_v2_pokemon.name}</h3>
            </div>
            {showDetail[0] && showDetail[1]=== data.id &&
                <div >
                  <div>{`Weight ${data.pokemon_v2_pokemon.weight}`}</div>
                  <div>{`Height ${data.pokemon_v2_pokemon.height}`}</div>
                  <div>{`Base Experience ${data.pokemon_v2_pokemon.base_experience}`}</div>
                </div>
            }
            </div>
        )
        })}
      </div>
        <div ref={bottom} >LOADING</div>
      </>
    )
}

export default Listing;