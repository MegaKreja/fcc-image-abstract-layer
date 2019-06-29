// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const imagesRoutes = require("./routes/images");
const uri = process.env.DB;

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get(("/"), (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use("/api", imagesRoutes);

app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});

// listen for requests :)
mongoose
  .connect(uri, {useNewUrlParser: true})
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
