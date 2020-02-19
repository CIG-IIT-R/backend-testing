


var auth = (app,BodyParser,mongoose,User,bcrypt,jwt)=>{




function token(user,res)
{
      var token=jwt.sign({userid:user._id},"rtthyj");
    res.json({
userId:user._id,
login:true,
      token
    })
}






   app.post("/signup",function(req,res){

 bcrypt.hash(req.body.password,10,function(err,hashed){
 if(err)
 	console.log("error");
 else
 User.create({name:req.body.username,password:hashed},function(err,user){
 	token(user,res);
    console.log("user created : " + user);
});
});
});








app.post("/login",function(req,res){

 User.findOne({name:req.body.username},function(err,user){ 
 	if(user)
 {
console.log(req.body.password);
bcrypt.compare(req.body.password,user.password,function(err,ress){
	if(ress)
	{	console.log("login");
token(user,res);
    }
	else
		{console.log("wrong");
  res.json({

login:false
    
    });
}
});

 }
 else
 	console.log("not found");
 });

});


}


module.exports = auth;

