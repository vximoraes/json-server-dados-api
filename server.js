const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('dados.json');
const middlewares = jsonServer.defaults();

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

server.use(middlewares);

server.use((req, res, next) => {
    if (req.method !== 'GET') {
        res.status(405).jsonp({
            error: 'Método não permitido. Apenas GET é permitido.'
        });
    } else {
        next();
    }
});

server.use(router);
server.listen(PORT, HOST, () => {
    console.log(`JSON Server está rodando em http://${HOST}:${PORT}`);
});