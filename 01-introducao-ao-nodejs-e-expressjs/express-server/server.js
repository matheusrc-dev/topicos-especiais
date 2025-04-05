const express = require("express");
const app = express();

// Servidor
app.listen(3000, () => {
  console.log("[Express] - Servidor rodando na porta 3000");
});

// Middlewares
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo deu errado!");
})

// Rotas
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>" + "<h2>Teste express com nodemon!</h2>");
});

app.post("/data", (req, res) => {
  res.send("Dados recebidos via POST");
});

app.post("/user", (req, res) => {
  const { body } = req;
  let result = "Usuário criado: ";

  for (const key in body.dados) {
    if (Object.prototype.hasOwnProperty.call(body.dados, key)) {
      result += body.dados[key] + "\n";
    }
  }

  res.send(result);
});
