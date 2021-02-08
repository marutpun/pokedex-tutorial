import React from 'react';

export default function Pokemon({ pokemon }) {
  return (
    <div className="col px-3 py-3">
      <div className="card border-dark">
        <div className="card-header">
          <h5 className="card-title text-center text-md-left">
            {pokemon.name}
          </h5>
        </div>
        <img src={pokemon.image} className="card-img-top" alt={pokemon.name} />
        <div className="card-body">
          <p className="float-left">
            <abbr title="Health Point">HP</abbr>: {pokemon.maxHP}
          </p>
          <p className="float-right">
            <abbr title="Combat Power">CP</abbr>: {pokemon.maxCP}
          </p>
        </div>
      </div>
    </div>
  );
}
