import axios from "axios";
import React from "react";

// para fazer requisições utilizamos metodos HTTP
// GET, POST, PUT, DELETE são os mais famosos (responsáveis pelo CRUD)

// GET = buscar dados
// POST = cadastrar
// PUT = alterar dados ja cadastrados
// DELETE = deletar

type Pokemon = {
  name: string;
  url: string;
};

export default function Requisicao() {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    async function fetchPokemons() {
      //   const response = await fetch(
      //     "https://pokeapi.co/api/v2/pokemon?limit=150"
      //   );

      //   const responsePokemon = await response.json();

      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=150"
      );

      setPokemons(data.results);
    }

    fetchPokemons();
  }, []);

  return (
    <div
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        gap: `2rem`,
        padding: `1rem`,
      }}
    >
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.name}
          style={{
            backgroundColor: `purple`,
            padding: `1rem 2rem`,
            borderRadius: `1rem`,
            minWidth: `15rem`,
            textAlign: `center`,
            color: `white`,
          }}
        >
          <h3> {pokemon.name}</h3>
        </div>
      ))}
    </div>
  );
}
