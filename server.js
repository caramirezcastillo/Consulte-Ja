// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); //•	Ativa o CORS, permitindo requisições externas.
app.use(express.json()); //•	Ativa o express.json() para que o servidor consiga ler corpos de requisição em JSON


const produtos = {
  "7894900010017": {
    nome: "Leite Integral 1L",
    descricao: "Leite integral pasteurizado 1 litro",
    preco: 6.5,
    imagem: "https://mercantilnovaera.vtexassets.com/arquivos/ids/217472-1600-auto?v=638542478816370000&width=1600&height=auto&aspect=true",
  },
  "7891000055127": {
    nome: "Coca-Cola 2L",
    descricao: "Refrigerante sabor cola 2 litros",
    preco: 9.99,
    imagem: "https://images.tcdn.com.br/img/img_prod/1384213/refrigerante_sabor_cola_pet_2_litros_coca_cola_19001_1_5f79e15ae7725593cf3b9f2e5c7cb043.jpg",
  },
  "7894900700014": {
    nome: "Arroz Tipo 1 - 1kg",
    descricao: "Arroz branco tipo 1 pacote de 1kg",
    preco: 8.9,
    imagem: "https://mercantilnovaera.vtexassets.com/arquivos/ids/181180/Arroz-Beneficiado-Branco-TIO-URBANO-Tipo-1-Pacote-1kg.jpg?v=637599888578000000",
  },
  "7896003700018": {
    nome: "Café Pilão Tradicional 500g",
    descricao: "Café torrado e moído, sabor encorpado, pacote de 500g.",
    preco: 15.49,
    imagem: "https://m.media-amazon.com/images/I/61-Sq6gYFEL._AC_SX569_.jpg",
  },
};

app.get("/api/produtos/:codigo", (req, res) => {
  const produto = produtos[req.params.codigo];
  if (!produto) return res.status(404).json({ erro: "Produto não encontrado" });
  res.json(produto);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Servidor rodando em http://localhost:${PORT}`));
