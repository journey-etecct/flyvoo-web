import { Link } from "react-router-dom";

export default function Erro404() {
  return (
    <div>
      <h1>
        Oops, essa página &quot;{window.location.pathname}&quot; não existe!
      </h1>
      <Link to="/" style={{ textDecoration: "underline" }}>
        Voltar para a página inicial
      </Link>
    </div>
  );
}
