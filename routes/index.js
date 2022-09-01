var express = require('express');
var router = express.Router();
var config = require('../lib/config')
const {MongoClient} = require("mongodb");
const uri = config.connString;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const collect = client.db("mainDB").collection("CalLabBooking");

router.get('/', function(req, res,next){
  res.send('index');
})
/* GET home page. */
router.post('/', function(req, res, next) {

    client.connect((err) => 
    {
      let newObj = {"name":req.body.name}
      collect.insertOne(newObj);
    });    

  
});



module.exports = router;
