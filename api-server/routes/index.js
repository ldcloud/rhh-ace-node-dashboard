var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var request = require('request');
var data = null;

var app2=express();
app2.use(bodyParser.json());

global.depBoard = {"departures":{"all":[{"aimed_departure_time": "12:40","destination_name": "Adelaide (ADL)","platform": "12","expected_departure_time": "12:40","airline":"Jetstar","code":"JQ709","terminal":"T4","status":"BOARDING"},
{"aimed_departure_time": "12:50","destination_name": "Sydney (SYD)","platform": "11","expected_departure_time": "12:50","airline":"ACE Air","code":"AC387","terminal":"T1","status":"ON TIME"},
{"aimed_departure_time": "12:55","destination_name": "Perth (PER)","platform": "15","expected_departure_time": "13:20","airline":"Qantas","code":"QF509","terminal":"T4","status":"ON TIME"},
{"aimed_departure_time": "13:10","destination_name": "Hobart (HBA)","platform": "33","expected_departure_time": "13:25","airline":"Virgin","code":"VG509","terminal":"T1","status":"ON TIME"},
{"aimed_departure_time": "13:15","destination_name": "Brisbane (BNE)","platform": "23","expected_departure_time": "13:35","airline":"Qantas","code":"QF509","terminal":"T2","status":"ON TIME"},
{"aimed_departure_time": "13:25","destination_name": "Singapore (SIN)","platform": "07","expected_departure_time": "13:55","airline":"Singapore","code":"SQ001","terminal":"T1","status":"ON TIME"},
{"aimed_departure_time": "13:40","destination_name": "Toronto (YYZ)","platform": "24","expected_departure_time": "14:10","airline":"Jetstar","code":"JQ509","terminal":"T4","status":"ON TIME"},
{"aimed_departure_time": "13:45","destination_name": "Sydney (SYD)","platform": "20","expected_departure_time": "14:10","airline":"Tiger","code":"TG409","terminal":"T4","status":"ON TIME"},
{"aimed_departure_time": "13:55","destination_name": "Adelaide (ADL)","platform": "18","expected_departure_time": "14:05","airline":"Qantas","code":"QF509","terminal":"T5","status":"ON TIME"}]}};

/*setInterval(function() {
  request("http://melairportdep.com/v3/mel/live", function(error, response, body) {

    if (body) {
      data = body
    }else{

      data = depBoard;
  
    };
    
    //data = body;
  
  });
}, 60000);
*/
/* GET home page. */
app2.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  var mockRes = "no values found"
  if (depBoard) {
  res.send(depBoard)
}else{
  res.send(mockRes)
};

});

app2.post('/', function(req, res, next) {
  
  res.header("Access-Control-Allow-Origin", "*");
  res.send(req.body);
  //find the flight number and replace content
  depBoard = updateDepBoard(req.body);
  console.log("Updated Dep Board" + JSON.stringify(depBoard));

});

function updateDepBoard(flight){
  var idx
  depBoard.departures.all.find(function(element, index){
      if (element.code == flight.code){
          element = flight;
          idx = index
          console.log("Updated Flight: "+flight.code +" "+ element.status);
      }
      //console.log("old: "+JSON.stringify(depBoard));
      return idx
  });
  depBoard.departures.all[idx] = flight;
  //console.log("new: "+JSON.stringify(depBoard));
  return depBoard;
};


module.exports = app2;
