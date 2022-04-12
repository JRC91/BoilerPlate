const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/yourdbname', {
  logging: false
})
module.exports = db

// if using HEROKU you can use process.env.DATABASE_URL
