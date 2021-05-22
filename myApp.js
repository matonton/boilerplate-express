var express = require('express');
var app = express();

console.log("Hello World");
console.log(__dirname);
console.log(process.env.MESSAGE_STYLE)

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  // res.send('Hello Express')
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/json', (req, res) => {
  // res.send('Hello Express')
  if (process.env.MESSAGE_STYLE == "uppercase") res.json({"message": "HELLO JSON"}) 
  else res.json({"message": "Hello json"})
})

















 module.exports = app;
