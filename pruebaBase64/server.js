const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/to-base64') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                const base64 = data.image.split(',')[1];

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ base64 }));
            } catch (e) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error procesando la imagen' }));
            }
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
