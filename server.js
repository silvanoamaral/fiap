const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('src/dist'))

  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'src','dist','index.html'))
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`))
