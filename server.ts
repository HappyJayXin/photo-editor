import express from 'express';
import next from 'next';
import compression from 'compression';
import morgan from 'morgan';

import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.set('trust proxy', true);

  server.use(compression());
  server.use(cookieParser());
  if (dev) {
    server.use(morgan('short'));
  }
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.get('*', (req, res) => {
    handle(req, res);
  });

  await server.listen(port);
  if (dev) {
    console.log(`> Ready on http://localhost:${port}`);
  } else {
    console.log('> Ready on production');
  }
})();
