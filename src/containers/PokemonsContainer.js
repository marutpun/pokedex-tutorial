import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import Pokemon from '../components/Pokemon';
import { GET_POKEMONS } from '../graphql/get-pokemons';

function PokemonsContainer() {
	const [number, setNumber] = useState(6);

	// Nest destructuring object + default parameter
	// -- example --
	//  const {
	//		data: {
	//	    pokemon [
	//	    ]
	//  	}
	//	}
	
	const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
		variables: { first: number },
	});

	const _fetchPokemonList = () => setNumber((prevNo) => prevNo + 6);

	const _resetPokemonList = () => setNumber(0);

	return (
		<main className="container">
			<h1 className="text-center">Pokemon</h1>
			<div className="btn-group" role="group" aria-label="toolbar">
				<button type="button" className="btn btn-success" onClick={_fetchPokemonList}>
					Request more data
				</button>
				<button type="button" className="btn btn-secondary" onClick={_resetPokemonList}>
					Reset
				</button>
			</div>

			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
				{pokemons.map((pokemon) => (
					<Pokemon key={pokemon.id} pokemon={pokemon} />
				))}
			</div>
		</main>
	);
}

export default PokemonsContainer;
