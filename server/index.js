import http from 'http';
import getApp from './getApp';

const port = process.env.PORT || 3000;

let server = http.createServer();

let app = getApp();

server.on('request', app);

server.listen(port, (err) => {
  if (err) {
    console.error('Can\'t start server, Error:', err);
  } else {
    console.info(`${process.pid} listening. Go to: http://localhost:${port}`);
  }
});
