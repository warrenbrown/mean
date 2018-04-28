const express = require('express');
const app = express();

app.use('/', function(req, res) {
  res.send('Hello World');
});

app.listen(3000);
console.log('server is running on port 3000');

module.exports = app;
