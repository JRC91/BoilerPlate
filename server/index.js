const path = require('path');
const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const app = express();
const port = 8080

app.use(express.static(path.join(__dirname, '../public/')))
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
