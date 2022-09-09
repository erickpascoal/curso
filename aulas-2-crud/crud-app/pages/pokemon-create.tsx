import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { FormEvent } from "react";

export default function PokemonCreate() {
  const router = useRouter();
  const [nameInput, setNameInput] = React.useState(``);
  const [typeInput, setTypeInput] = React.useState(``);

  async function createPokemon(event: FormEvent) {
    event.preventDefault();

    await axios.post("http://localhost:3000/pokemons", {
      name: nameInput,
      type: typeInput,
    });
    router.back();
  }

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
        <button onClick={createPokemon}>Salvar</button>
      </form>
    </div>
  );
}
