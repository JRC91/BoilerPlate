'use strict'
const {db, User} = require('./db')
const app = require('./index')
const port = 8080

const init = async () => {
  try {
    await db.sync()
    await User.sync()
  app.listen(port, () => console.log(`listening on port ${port}`))
}
catch(err){
  console.log(err)
}
}

init ()
