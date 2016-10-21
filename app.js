var express = require('express')
var app = express()
app.get('/', function (req,res) {
    res.send(`<body bgcolor = "#FF00FF">
      <a href="/">Index</a>
      <a href="/page1">page1</a>
      <a href="/page2">page2</a>
      <a href="/page3">page3</a>
      <a href="/page4">page4</a>
      <h1>Index นะจ๊ะ</h1>`)
})

app.listen(3000,function () {

  console.log('Example app listening on port 3000!');
})
