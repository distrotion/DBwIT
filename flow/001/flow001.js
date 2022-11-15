const express = require("express");
const router = express.Router();
var mongodb = require('./../../function/mongodb');
var mssql = require('./../../function/mssql');


router.get('/flow001', async (req, res) => {

return  res.json("testflow1");
})

router.post('/ITdcConnect', async (req, res) => {
  // console.log(mssql.qurey())
  console.log(req.body);
  let output = { 
    "statusdb":"nok" 
  };
  let input = req.body; 
  if (input[`query`] !== undefined){
    output = await mssql.qurey(input[`query`]);
  }

  // console.log(output)
 
  return res.json(output);
});


module.exports = router;
