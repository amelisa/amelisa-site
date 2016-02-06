import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.dev.babel'
import HtmlLayout from '../app/pages/HtmlLayout'

let compiler = webpack(webpackConfig)

let app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevMiddleware(compiler, webpackConfig.devServer))
  app.use(webpackHotMiddleware(compiler))
}

app.use(express.static(process.cwd() + '/public'))

app.use((req, res, next) => {
  let html = renderToString(<HtmlLayout />)
  res.send(html)
})

export default app
