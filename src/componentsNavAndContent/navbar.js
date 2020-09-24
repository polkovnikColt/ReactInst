import React from "react"
import Item from "./contentOneItem"


class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLogged: this.props.logged ,hasMistake:false};
  }
    Log = (e) =>{
        e.preventDefault();
        var login = this.login.value.trim();
        var password = this.password.value.trim();
    if(login !== "" && password !== "") {
        this.props.log()
        this.setState({isLogged: this.props.logged},() => {console.log(this.props.logged)})
    }
    else{
        this.setState({hasMistake:true});
       }
    }
    
    unLog = (e) =>{
        e.preventDefault();
        this.props.unlog();
        this.setState({isLogged: this.props.logged,hasMistake:false});
    }
    
    handleBlur = (e) => {
        this.setState({isLogged: false, hasMistake:false});
    }
    
    render(){
        var logged;
        var profile;
        if(this.state.isLogged){
             logged = <button class="btn btn-outline-success ml-2 " aria-label="Search" onClick = {this.unLog}>Log Out</button>;
             profile =  <a class="nav-link active" href="/profile">Profile<span class="badge badge-light ">0</span></a>;
        }
       if(this.state.hasMistake){
            logged =  <form class="form-inline my-2 mx-0 my-lg-0">  <input onFocus = {this.handleBlur} type="text" aria-label="First name" class="form-control" ref={(c) => this.login = c} name="login" style ={{backgroundColor: "#d92027"}}/ > <input onFocus = {this.handleBlur} type="password" aria-label="Last name" class="form-control" ref={(c) => this.password = c} name="password" style ={{backgroundColor: "#d92027"}}/><button class="btn btn-outline-success ml-2 " aria-label="Search" onClick = { this.Log }>Log In</button></form>;
      }
        if(!this.state.isLogged && !this.state.hasMistake){
            logged =  <form class="form-inline my-2 mx-0 my-lg-0">  <input type="text" aria-label="First name" class="form-control" ref={(c) => this.login = c} name="login"/ > <input type="password" aria-label="Last name" class="form-control" ref={(c) => this.password = c} name="password"/><button class="btn btn-outline-success ml-2 " aria-label="Search" onClick = { this.Log }>Log In</button></form>;  
        }
        return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a data-toggle="modal" data-target="#exampleModal"><img src="https://c7.hotpng.com/preview/800/959/694/vegvisir-ornament-viking-odin-runes-thor.jpg" width="50" height="50" class="ml-3 mr-1 p-1" /></a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto outline-none">

                <li class="nav-item active">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/photo">Photo stream</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link " href="/registration">Registraion</a>
                </li>
                <li class="nav-item ">
                    {profile}
                </li>
            </ul>
           {logged}
        </div>
    </nav>

        </div>
        );
    }
}

export default NavBar;