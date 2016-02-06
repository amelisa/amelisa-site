import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Router from 'react-router';
import ServerRoot from '../app/pages/ServerRoot';

export default function () {

  let app = express()
    .use(express.static(process.cwd() + '/public'));

  app.use((req, res, next) => {
    let html = ReactDOMServer.renderToString(<ServerRoot />);
    res.send(html);
  });

  return app;
}
