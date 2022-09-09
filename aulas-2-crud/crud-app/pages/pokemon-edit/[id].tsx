import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FormEvent } from "react";

export default function PokemonEdit() {
  const router = useRouter();
  const [nameInput, setNameInput] = React.useState(``);
  const [typeInput, setTypeInput] = React.useState(``);

  async function editPokemon(event: FormEvent) {
    event.preventDefault();
    await axios.put(`http://localhost:3000/pokemons/${router.query.id}`, {
      name: nameInput,
      type: typeInput,
    });
    router.back();
  }

  useEffect(() => {
    async function fetchPokemonsSelect() {
      const response = await axios.get(
        `http://localhost:3000/pokemons/${router.query.id}`
      );

      setNameInput(response.data.name);
      setTypeInput(response.data.type);
    }

    fetchPokemonsSelect();
  }, [router.query.id]);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Nome"
          onChange={(event) => setNameInput(event.target.value)}
          value={nameInput}
        />
        <input
          type="text"
          placeholder="Tipo"
          onChange={(event) => setTypeInput(event.target.value)}
          value={typeInput}
        />
        <button onClick={editPokemon}>Salvar</button>
      </form>
    </div>
  );
}
