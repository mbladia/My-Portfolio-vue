// const express = require('express')
// const serveStatic = require('serve-static')
// const path = require('path')

// const app = express()

// app.use('/', serveStatic(path.join(__dirname, '/dist')))

// const port = process.env.PORT || 8080
// app.listen(port)

// console.log('Listening on port' + port);


const express = require('express');
const history = require('connect-history-api-fallback');const app = express();
app.use(history());
app.use(express.static('src'));app.get('/', (req, res) => {
  res.sendFile('src/index.html');
});app.listen(3000, () => console.log('server started'));