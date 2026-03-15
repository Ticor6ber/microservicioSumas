import { createServer } from 'node:http';
import { URL } from 'node:url';

const server = createServer((req, res) => {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };

  const url = new URL(req.url, `http://${req.headers.host}`);

  const n1 = parseFloat(url.searchParams.get("a"));
  const n2 = parseFloat(url.searchParams.get("b"));

  const resultado = n1 + n2;

  res.writeHead(200, headers);
  res.end(JSON.stringify({ resultado }));

});

server.listen(process.env.PORT || 3002, () => {
  console.log("Microservicio SUMA Query Params activo");
});
