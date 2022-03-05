var express = require("express");
var app = express();

app.use(express.static("."));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});



var fs = require('fs');
var statistics = {};
let aa = grassArr.length;
let bb = grass2Arr.length;
let cc = grassEaterArr.length;
let dd = ulArr.length;
let ff = PredatorArr.length;

setInterval(function() {
statistics.grass = aa;
statistics.grassEater = cc;
statistics.grass2 = bb;
statistics.ul = dd;
statistics.Predator = ff;
fs.writeFile("statistics.json", JSON.stringify( statistics), function(){
console.log("send")
})
},1000);