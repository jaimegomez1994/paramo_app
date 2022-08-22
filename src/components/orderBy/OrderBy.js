import { useSelector, useDispatch } from 'react-redux';
import { updatePokemons, selectPokemons } from '../container/pokemonsSlice';
import { updatePokemonsToShow } from '../listing/pokemonsToShowSlice';

const OrderBy = () => {
    const dispatch = useDispatch();
    const pokemonsRedux = useSelector(selectPokemons);

    const orderByAZ = () => {
      return [...pokemonsRedux].sort((a, b) => {
        const nameA = a.pokemon_v2_pokemon.name.toUpperCase();
        const nameB = b.pokemon_v2_pokemon.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
  }
  const orderByZA = () => {
    return [...pokemonsRedux].sort((a, b) => {
      const nameA = a.pokemon_v2_pokemon.name.toUpperCase();
      const nameB = b.pokemon_v2_pokemon.name.toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
  }


const orderBy = (orderBy) => {
  let data;
    switch (orderBy) {
      case 'lowest':
        data = [...pokemonsRedux].sort((a, b) => a.id - b.id);
        dispatch(updatePokemons(data));
        break;
      case 'highest':
        data = [...pokemonsRedux].sort((a, b) => b.id - a.id);
        dispatch(updatePokemons(data));
        break;
      case 'az':
        data = orderByAZ();
      dispatch(updatePokemons(data));
        break;
      case 'za':
        data = orderByZA();
        dispatch(updatePokemons(data));
        break;
      default:
    }
    dispatch(updatePokemonsToShow(data.slice(0, 19)));
  }
    return (
        <>
        <select className="w-25" name="orderBy" id="orderBy" onChange={(e) => orderBy(e.target.value)}>
        <option value="lowest">Lowest Number</option>
        <option value="highest">Highest Number</option>
        <option value="az">A->Z</option>
        <option value="za">Z->A</option>
        </select>
        </>
    )
}

export default OrderBy;