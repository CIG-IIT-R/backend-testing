
var mongoose= require("mongoose");


var userSchema= new mongoose.Schema({
  date:{ type:String},heading:{ type:String},url:{ type:String},subheading:{ type:String}
});
module.exports=mongoose.model("Cls",userSchema);