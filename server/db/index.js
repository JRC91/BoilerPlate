const Sequelize = require('sequelize')
const User = require('./models/model')
const db = new Sequelize('postgres://localhost:5432/yourdbname', {
  logging: false
})
module.exports = {db,
  models: {
    User
  },
}
// if using HEROKU you can use process.env.DATABASE_URL
