const http = require('http')
const path = require('path')

const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const expressServer = express()
const server = http.createServer(expressServer)

const webpackConfig = require('./webpack.config')

//Static
expressServer.use('/', express.static(path.join(__dirname, 'public')))

//Assets
const compiler = webpack(webpackConfig)
expressServer.use(webpackDevMiddleware(
  compiler,
  { publicPath: '/assets/', stats: { colors: true } })
)

server.listen(3000)