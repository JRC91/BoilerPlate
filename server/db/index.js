
const User = require('./models')
const db = require('./models')
module.exports = {db,
  models: {
    User
  },
}
// if using HEROKU you can use process.env.DATABASE_URL
