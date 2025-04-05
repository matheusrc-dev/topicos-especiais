const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Hello World</h1>");
  res.write("<h2>Criando um servidor simples com Node.JS</h2>");
  res.write("<p>Isso é incrível!</p>");
  res.write(req.url);
  res.write("<p>Agora está com Nodemon!</p>")
  res.end();
});


server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
