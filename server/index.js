const path = require('path');
const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const app = express();
'use strict'
const {db, User} = require('./db/models')




const port = 8080

app.use(express.static(path.join(__dirname, '../public/')))
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/auth', require('./router/auth'))


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




app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
