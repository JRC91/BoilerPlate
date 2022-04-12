const db = require('./db.js')
const app = require('./index')
const port = 8080

db.sync()
  .then(function(){
    app.listen(port)
  })
