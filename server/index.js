import '../config'
import http from 'http'
import app from './app'

const port = process.env.PORT

let server = http.createServer()

server.on('request', app)

server.listen(port, (err) => {
  if (err) {
    console.error('Can\'t start server, Error:', err)
  } else {
    console.info(`${process.pid} listening. Go to: http://localhost:${port}`)
  }
})
