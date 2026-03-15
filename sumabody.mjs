import { createServer } from 'node:http';

const server = createServer((req, res) => {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Permitir CORS
  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    return res.end();
  }

  if (req.url === '/sumar' && req.method === 'POST') {

    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {

      const datos = JSON.parse(body);

      const n1 = parseFloat(datos.a);
      const n2 = parseFloat(datos.b);

      const resultado = n1 + n2;

      res.writeHead(200, headers);
      res.end(JSON.stringify({ resultado }));

    });

  } else {

    res.writeHead(404, headers);
    res.end(JSON.stringify({ error: "Ruta no encontrada" }));

  }

});

server.listen(3003, () => {
  console.log("Microservicio SUMA Body Params en puerto 3003");
});