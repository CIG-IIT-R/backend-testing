import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import $ from 'jquery';
import './App.css';

class  Login extends Component {
  constructor(props){
    super(props)
    this.state={username:"",password:"",enter:false,login:false};
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
  $.post( "http://localhost:3001/signup",this.state,(data,status)=>{

  console.log("res aya ha");
   console.log(data);
            });

}


render(){




return(
  <div>

  
<input  onChange={this.handleChange}/>
<input  onChange={this.handleChange1}/>
<button type="button"   onClick={this.submit.bind(this)}>login</button>

</div>

)

}
}

export default Login;