import { useState } from "react";
import "./LeitorFisico.css"; 

function LeitorFisico() {
  const [codigo, setCodigo] = useState("");
  const [produto, setProduto] = useState(null);
  const [erro, setErro] = useState("");

  const buscarProduto = async (valor) => {
    if (!valor) return; //Se o código estiver vazio, sai da função sem fazer nada.
    try {
      const res = await fetch(`http://localhost:4000/api/produtos/${valor}`); //Faz uma requisição HTTP GET para o servidor local:
      if (!res.ok) throw new Error("Produto não encontrado");
      const data = await res.json(); //Converte a resposta do servidor em objeto JavaScript.
      setProduto(data); //Atualiza o estado produto com os dados retornados.
      setErro(""); //Limpa qualquer mensagem de erro anterior.
    } 
    catch (err) {
      setProduto(null);
      setErro("Produto não encontrado ");
    }
  };

  return (
    <div className="leitor-container">
      <h2 className="titulo">Leitor Físico </h2>

      <input
        type="text"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)} //Cada vez que o usuário digita algo, o estado codigo é atualizado.
        onKeyDown={(e) => {
          if (e.key === "Enter") buscarProduto(codigo);
        }}
        placeholder="Passe o leitor aqui ou digite o código"
        autoFocus
        className="input-codigo"
      />

      {erro && <p className="erro">{erro}</p>} 

      {produto && (
        <div className="card-produto">
          <img src={produto.imagem} alt={produto.nome} className="imagem-produto" />
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <p className="preco">
            <strong>Preço:</strong> R$ {produto.preco.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

export default LeitorFisico;
