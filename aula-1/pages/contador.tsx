import React from "react";

export default function Contador() {
  //=====================================================================
  // variáveis nao alteram o estado da página
  // modo errado:
  // let resultado = 2;

  // function incrementa() {
  //   resultado = resultado + 1;

  //   console.log(resultado);
  // }

  //=====================================================================

  //apenas States do próprio React que alteram o estado da página

  // o React.useState retornar uma lista, na primeira posição o valor,
  // e na segunda uma função responsável por atualizar esse valor e também a DOM

  // const contadorState = React.useState(0);
  // const resultado = contadorState[0]
  // const atualizaResultado = contadorState[1]

  // podemos desestruturar o array, deixando nosso código mais limpo
  const [resultado, atualizaResultado] = React.useState(0);

  function incrementa() {
    atualizaResultado(resultado + 1);
  }

  function decrementa() {
    atualizaResultado(resultado - 1);
  }

  return (
    <div>
      <h1> resultado: {resultado}</h1>
      <button onClick={decrementa}>-</button>
      <button onClick={incrementa}>+</button>
    </div>
  );
}
