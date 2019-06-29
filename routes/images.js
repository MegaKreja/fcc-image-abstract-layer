const axios = require("axios");
const router = require("express").Router();
const History = require("../models/history");
const apiKey = process.env.API_KEY;

router.get("/imagesearch/:term", (req, res) => {
  const term = req.params.term;
  const query = req.query.offset ? `&page=${req.query.offset}` : "";
  
  axios.get(`https://api.unsplash.com/search/photos?query=office&client_id=${apiKey}&${query}`)
    .then(images => {
      const newHistory = new History({term});
      newHistory.save().then(result => {
        const imagesResult = images.data.results.map(image => {
          return {
            url: image.urls.raw,
            description: image.description,
            alt_description: image.alt_description,
            thumbnail: image.urls.thumb,
            user: image.user.username
          }
        })
        res.json(imagesResult);
      }).catch(err => console.log(err))
  }).catch(err => console.log(err))
})

router.get("/latest", (req, res) => {
  History.find({}, {'term':1, 'when': 1, '_id':0}).then(result => {
    res.json(result);
  }).catch(err => console.log(err))
})

module.exports = router;