
const fs =require('fs');

var thinkgear = require('../lib');



//Creates Client and brings in data from index.js
var client = thinkgear.createClient();





//Puts data into the logs
client.on('data',function(data){
	console.log((new Date).toISOString() + ': ' + JSON.stringify(data));

var data2 = JSON.stringify(data);
//var dataSplit = data2.split('":',3)[2];
//var dataSplit2 =dataSplit.split(' ')[0];

var attention = data2.split("\"attention\":")[1];
var attention2 = attention.split("\"meditation\":")[0];

var meditation = data2.split("\"meditation\":")[1];
var meditation2 = meditation.split ("\"eegPower\":")[0];
var meditation3 = meditation2.substr(0,2);

var delta = data2.split("\"delta\":")[1];
var delta2 = delta.split("\"theta\":")[0];

var theta = data2.split("\"theta\":")[1];
var theta2 = theta.split("\"lowAlpha\":")[0];

var lowAlpha = data2.split("\"lowAlpha\":")[1];
var lowAlpha2 = lowAlpha.split("\"highAlpha\":")[0];

var highAlpha = data2.split("\"highAlpha\":")[1];
var highAlpha2 = highAlpha.split("\"lowBeta\":")[0]; 

var lowBeta = data2.split("\"lowBeta\":")[1];
var lowBeta2 = lowBeta.split("\"highBeta\":")[0]; 

var highBeta = data2.split("\"highBeta\":")[1];
var highBeta2 = highBeta.split("\"lowGamma\":")[0];

var lowGamma = data2.split("\"lowGamma\":")[1];
var lowGamma2 = lowGamma.split("\"highGamma\":")[0];

var highGamma = data2.split("\"highGamma\":")[1];
var highGamma2 = highGamma.split("}")[0];

//Appends to a CSV

var stream = fs.createWriteStream("append.csv", {flags:'a'});
stream.write((attention2 + meditation3 + "," + delta2 + theta2 + lowAlpha2 + highAlpha2 + lowBeta2 + highBeta2 + lowGamma2 + highGamma2 ) + "\n");


});
client.connect();


















