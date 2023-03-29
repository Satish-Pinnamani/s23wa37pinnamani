var express = require('express');
var router = express.Router();

var rand = Math.random()*100;
//var rand2 = Math.random()*100;
var value1=0;
var value2=0;
var value3=0;


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  num1=Math.acosh(rand);
  num2=Math.log1p(rand);
  num3=Math.tan(rand);
  num4=Math.sqrt(rand);
  
  //res.send(`The random values is: ${ran},<br>imul applied to ran is: ${num1},<br>log applied to ran is: ${num2},<br>log10 applied to ran is: ${num3}`);
  
  
  res.send(`The Random number is ${rand}  <br> <br> acosh applied to ${rand}is ${num1}  <br> <br> log1p applied to ${rand}is ${num2}  <br> <br>  tan applied to ${rand} is ${num3} <br> <br>  sqrt applied to ${rand} is ${num3}`);


});

module.exports=router;