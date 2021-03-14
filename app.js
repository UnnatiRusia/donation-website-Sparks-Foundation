const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var Razorpay = require('razorpay');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res) {
   res.render("index")
})
app.get("/contact",function(req,res) {
  res.render("contact")
})
app.post("/contact",function(req,res) {
  res.render("success")
})
port=process.env.PORT||3000
app.listen(port, function() {
  console.log("Server started on port 3000");
});
