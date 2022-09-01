var express = require('express');
var router = express.Router();
var config = require('./lib/config')
const {MongoClient} = require("mongodb");
const uri = config.connString;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const collect = client.db("mainDB").collection("CalLabBooking");


/* GET home page. */
router.post('/', function(req, res, next) {

    client.connect((err) => 
    {
      let newObj = {"name":req.body.value}
      collect.insertOne(newObj);
    });    
    client.close();
    res.send("completed");
});

router.get('/', function(req, res,next){
  res.send('index.js');
})

module.exports = router;
