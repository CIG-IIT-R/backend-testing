


var create_cls = (app,BodyParser,mongoose,Cls,bcrypt,jwt)=>{



 


function valid(req,res,callback){
 
jwt.verify(req.body.token,"rtthyj",function(err,decoded){
if(decoded){
if(decoded.userid==req.body.userid)
  callback(true);
else
callback(false);
}
else
callback(false);

});
}








app.post("/posts/create_cls",function(req,res){
valid(req,res,function(valid)
{
  if(valid) 
  {
  Cls.create({url:req.body.url,subheading:req.body.sub_heading,date:req.body.date,heading:req.body.heading},function(err,card){
 if(err)
  console.log("server error");
  else
    console.log(card);
});
}
else
  console.log("false");

});

});

}


module.exports = create_cls;

