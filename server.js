// const express = require('express')
// const serveStatic = require('serve-static')
// const path = require('path')

// const app = express()

// app.use('/', serveStatic(path.join(__dirname, '/dist')))

// const port = process.env.PORT || 8080
// app.listen(port)

// console.log('Listening on port' + port);

const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
  fs.readFile('index.html', 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open "index.html" file.')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})