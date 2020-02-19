
var mongoose= require("mongoose");


var userSchema= new mongoose.Schema({
  head:{ type:String},sub_head:{ type:String}
});
module.exports=mongoose.model("Heading",userSchema);