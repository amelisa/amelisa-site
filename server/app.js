import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.dev.babel'
import HtmlLayout from '../app/pages/HtmlLayout'
import routes from '../server.generated/routes'

let compiler = webpack(webpackConfig)

let app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevMiddleware(compiler, webpackConfig.devServer))
  app.use(webpackHotMiddleware(compiler))
}

app.use(express.static(process.cwd() + '/public'))

app.use((req, res, next) => {
  match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
    console.log('match', err, redirectLocation, renderProps)
    if (err) {
      console.error('router error', err)
      return res.status(500).end('Internal error')
    }
    if (redirectLocation) return res.redirect(302, redirectLocation.pathname + redirectLocation.search)

    let children = <RoutingContext {...renderProps} />
    let html = renderToString(<HtmlLayout children={children} />)
    res.send(html)
  })
})

export default app
