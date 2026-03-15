import { createServer } from 'node:http';

const server = createServer((req, res) => {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };

  const partes = req.url.split('/'); // /sumar/5/9

  const n1 = parseFloat(partes[2]);
  const n2 = parseFloat(partes[3]);

  const resultado = n1 + n2;

  res.writeHead(200, headers);
  res.end(JSON.stringify({ resultado }));

});

server.listen(process.env.PORT || 3001, () => {
  console.log("Microservicio activo");
});
