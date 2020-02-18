import React, { Component }  from 'react';
import logo from './logo.svg';
import {Switch,Route,Link,Redirect} from 'react-router-dom';
import './App.css';
import SignUp from './signup.js';
import Login from './login.js';
import Admin from './admin.js';


class  App extends Component {
  constructor(props){
    super(props)
    this.state={redirect:false};
  
  }

	logout(){
		console.log(this.state.redirect);
		localStorage.setItem("token", "");
  localStorage.setItem("user", "");
  this.setState({redirect:true});
  console.log("hit");
	};

redirecting(){
	console.log("red");
	this.setState({redirect:false});
}


render(){





return(
 <div className="App">
    {
  (this.state.redirect)?<Redirect to="/login"/>:<div></div>
}
    <Link to="/signup">SignUp</Link>
     <Link to="/login">Login</Link> 
     <Link  onClick={this.logout.bind(this)}>LogOut</Link> 
  
     <Switch>
            

             <Route path="/login"  render={(props)=><Login handle={this.redirecting.bind(this)}/>}/>
             <Route path="/home"  render={(props)=><Admin/>}/>
             <Route path="/signup"  render={(props)=><SignUp  handle={this.redirecting.bind(this)}/>}/>
        </Switch>
    </div>

)

}
}


export default App;
