var express = require('express');
var bodyParser = require('body-parser');
var app = express();

console.log("Hello World");
console.log(__dirname);
console.log(process.env.MESSAGE_STYLE);

app.use(bodyParser.urlencoded({ extended: false }));

app.route('/name')
  .get((req, res, next) => {
    console.log(req.query);
    res.json({'name': req.query.first + " " + req.query.last});
  })
  .post((req, res, next) => {
    console.log("POST request");
    res.json({'name': req.body.first + " " + req.body.last})
  })
;

app.get('/:word/echo', (req, res, next) => {
  console.log(req.params);
  res.json({'echo': req.params.word});

});

app.use('', (req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  console.log({'time': req.time});
  res.json({'time': req.time})
  next();
}, function(req, res) {
  console.log("final function");
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('Hello Express');
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
  // res.send('Hello Express');
  if (process.env.MESSAGE_STYLE == "uppercase") res.json({"message": "HELLO JSON"});
  else res.json({"message": "Hello json"});
});

















 module.exports = app;
