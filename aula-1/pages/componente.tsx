export default function Componente() {
  const title = `minha pagina`;

  return (
    <div>
      <h1>{title}</h1>

      <OlaComNome name={`erick`} lastName={`pascoal `} />

      <Ola />
    </div>
  );
}

//======================================

// componente simples (sem props)
function Ola() {
  return <div>olá pessoal</div>;
}

//======================================

//tipamos nossos componentes parar auxiliar quem utiliza
type OlaComNomeProps = {
  name: string;
  lastName?: string;
};

// componente react sempre recebe um objeto como propriedade
function OlaComNome(props: OlaComNomeProps) {
  return (
    <div>
      olá {props.name} {props.lastName}
    </div>
  );
}
