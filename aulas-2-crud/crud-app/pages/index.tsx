import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Pokemon = {
  id: string;
  name: string;
  type: string;
};

export default function Home() {
  const router = useRouter();

  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  async function deletePokemon(id: string) {
    await axios.delete(`http://localhost:3000/pokemons/${id}`);

    const newList = pokemons.filter((pokemon) => pokemon.id != id);
    setPokemons(newList);
  }

  async function fetchPokemons() {
    const response = await axios.get("http://localhost:3000/pokemons");

    setPokemons(response.data);
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <div
        style={{
          marginBottom: `1rem`,
          backgroundColor: `blue`,
          color: `white`,
          padding: `1rem 2rem`,
        }}
      >
        <Link href={`/pokemon-create`}>
          <a> Cadastrar</a>
        </Link>
      </div>

      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>
          {pokemon.name}

          <button onClick={() => router.push(`pokemon-edit/${pokemon.id}`)}>
            Editar
          </button>
          <button onClick={() => deletePokemon(pokemon.id)}>Deletar</button>
        </div>
      ))}
    </div>
  );
}
