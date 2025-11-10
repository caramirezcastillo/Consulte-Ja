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

   "000177": {
    nome: "Cadeira",
    descricao: "Sillas De Oficina Mobiliário De Escritório Cadeira Moderna Fauteuil Gerente De Mesa Ceo Cadeira De Escritório chefe Cadeira Escritório",
    preco: 300,
    imagem: "https://s.alicdn.com/@sc04/kf/H2194638d47d94f0295a1e5fa93b41eb2W/Chair-s-Comfortable-Black-Office-Chair-Lumbar-Support-Ergonomic-Mid-Back-Cushion-Mesh-Swivel-Rolling-for-Desk-Gaming-Home-Use.png_300x300.jpg",
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
    descricao: "Café torrado e moído, sabor encorpado, pacote de 500g",
    preco: 15.49,
    imagem: "https://m.media-amazon.com/images/I/61-Sq6gYFEL._AC_SX569_.jpg",
  },
  "7891910000197": {
    nome: "Feijão Carioca 1kg",
    descricao: "Feijão carioca tipo 1, grãos selecionados, pacote de 1kg",
    preco: 9.2,
    imagem: "https://mambodelivery.vtexassets.com/arquivos/ids/167357/feijao-carioca-tipo-1-kicaldo-1kg.jpg?v=637883236210600000",
  },
  "7894900020010": {
    nome: "Macarrão Espaguete 500g",
    descricao: "Macarrão tipo espaguete tradicional 500g",
    preco: 5.4,
    imagem: "https://cristalalimentos.com.br/wp-content/uploads/2023/11/Safra-Espaguete-500g.jpg",
  },
  "7896003700025": {
    nome: "Açúcar Refinado 1kg",
    descricao: "Açúcar branco refinado, pacote de 1kg",
    preco: 4.99,
    imagem: "https://superprix.vteximg.com.br/arquivos/ids/192077/541354.jpg?v=637394065614300000",
  },
  "7891150060162": {
    nome: "Óleo de Soja 900ml",
    descricao: "Óleo vegetal de soja 900ml",
    preco: 7.8,
    imagem: "https://carrefourbrfood.vtexassets.com/arquivos/ids/211616/141836_1.jpg?v=637272514200130000",
  },
  "7894900700052": {
    nome: "Arroz Integral 1kg",
    descricao: "Arroz integral tipo 1, pacote de 1kg",
    preco: 9.5,
    imagem: "https://josapar.vteximg.com.br/arquivos/ids/157452-1000-1000/18483_1.jpg?v=638545905837500000",
  },
  "7894900010109": {
    nome: "Leite Desnatado 1L",
    descricao: "Leite desnatado pasteurizado 1 litro",
    preco: 6.3,
    imagem: "https://redemix.vteximg.com.br/arquivos/ids/213937-1000-1000/7898403782394.jpg?v=638350624515570000",
  },
};

app.get("/api/produtos/:codigo", (req, res) => {
  const produto = produtos[req.params.codigo];
  if (!produto) return res.status(404).json({ erro: "Produto não encontrado" });
  res.json(produto);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Servidor rodando em http://localhost:${PORT}`));
