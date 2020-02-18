import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import $ from 'jquery';
import './App.css';

class  Admin extends Component {
  constructor(props){
    super(props)
    this.state={redirect:false};
    this.handleChange=this.handleChange.bind(this);
    this.handleChange1=this.handleChange1.bind(this);
  }


componentDidMount(){


  var token =localStorage.getItem("token");
var userid =localStorage.getItem("user");
   $.post( "http://localhost:3001/validity_check",{ 
   token: token,
   userid:userid
  },(data,status)=>{
    console.log(data);
if(data.login==false)
  this.setState({redirect:true})
            });





}

handleChange(e){
  this.setState({username:e.target.value});
}

handleChange1(e){
  this.setState({password:e.target.value});
}

submit(){
  $.post( "http://localhost:3001/signup",this.state,(data,status)=>{

  console.log("res aya ha");
   console.log(data);
            });

}


render(){




return(


  <div>
{(this.state.redirect)?<Redirect to="/login"/>:<div>Admin</div>}


</div>

)

}
}

export default Admin;