const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => {
    return app.render(req, res, '/index', req.query);
  });

  server.get('/about', (req, res) => {
    return app.render(req, res, '/about', req.query);
  });

  server.get('/p/:id', (req, res) => {
    return app.render(req, res, '/p', { id: req.params.id });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
