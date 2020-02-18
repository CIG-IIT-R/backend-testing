import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import $ from 'jquery';
import './App.css';

class  Login extends Component {
  constructor(props){
    super(props)
    this.state={username:"",password:"",redirect:false};
    this.handleChange=this.handleChange.bind(this);
    this.handleChange1=this.handleChange1.bind(this);
  }

handleChange(e){
  this.setState({username:e.target.value});
}

handleChange1(e){
  this.setState({password:e.target.value});
}

submit(){
console.log("submit");
$.post( "http://localhost:3001/login",this.state,(data,status)=>{
  console.log(data);
 if(data.login){

 localStorage.setItem("token", data.token);
  localStorage.setItem("user", data.userId);
  
  this.props.handle();
  this.setState({redirect:true});
}


});

}


render(){



return(
  <div>
{
  (this.state.redirect)?<Redirect to="/home"/>:<div></div>
}

<input  onChange={this.handleChange}/>
<input  onChange={this.handleChange1}/>
<button type="button"   onClick={this.submit.bind(this)}>login</button>

</div>

)

}
}

export default Login;