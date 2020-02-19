var express =require("express");
var app = express();
var BodyParser = require("body-parser");
var mongoose= require("mongoose");
var User = require("./User");
var Cls = require("./cls_model.js");
mongoose.connect("mongodb://localhost/card");
var bcrypt=require("bcrypt");
var upload = require('express-fileupload');
var jwt=require("jsonwebtoken");
var auth =require("./auth.js");
var create_cls =require("./create_cls.js");

app.use(upload()); // configure middleware
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.use(express.static('public'))
auth(app,BodyParser,mongoose,User,bcrypt,jwt);
create_cls(app,BodyParser,mongoose,Cls,bcrypt,jwt);


// function token(user,res)
// {
//       var token=jwt.sign({userid:user._id},"rtthyj");
//     res.json({
// userId:user._id,
// login:true,
//       token
//     })
// }



function verify(req,res){
  console.log(req.body.token);
  console.log(req.body.userid);
jwt.verify(req.body.token,"rtthyj",function(err,decoded){
if(decoded){
if(decoded.userid==req.body.userid)
  res.json({login:true  
    });
else
res.json({login:false});
}
else
res.json({login:false});

});
}


// app.post("/upload/cls",function(req,res){
// console.log("upload");
// console.log(req);
// });





app.post("/validity_check",function(req,res){


verify(req,res);
}
);



app.post('/upload/cls',function(req,res){
  console.log(req.files);
  if(req.files){
    var file = req.files.image;
     var name = req.files.image.name;
      
    var uploadpath =  __dirname +'/public/' + name;
    file.mv(uploadpath,function(err){
      if(err){
        console.log("File Upload Failed",name,err);
        res.send("Error Occured!")
      }
      else {
        console.log("File Uploaded",name);
        res.send('Done! Uploading files')
      }
    });
  }
  else {
    console.log("no")
    res.send("No File selected !");
    res.end();
  };
})








app.listen(3001,process.env.IP, function(){
	console.log("runnig");
})