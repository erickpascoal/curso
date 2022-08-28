import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        gap: `3rem`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        height: `100vh`,
      }}
    >
      <Link href={`componente`}>Componente</Link>
      <Link href={`contador`}>Contador</Link>
      <Link href={`requisicao`}>Requisição</Link>
    </div>
  );
}
