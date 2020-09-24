import React from "react"

class Form extends React.Component {
    constructor(props){
        super(props);
    }
   
    onSubmit = (e) =>{
        e.preventDefault();
    }
    
    handleBlur = (e) => {
        this.setState({isLogged: false, hasMistake:false});
    }
    
    render() {
    
        return (
        <form onSubmit = {this.onSubmit}>
        <div class="form-inline my-2 mx-0 my-lg-0">  <input onFocus = {this.handleBlur} type="text" aria-label="First name" class="form-control" ref={(c) => this.login = c} name="login" style ={{backgroundColor: "#d92027"}}/ > <input onFocus = {this.handleBlur} type="password" aria-label="Last name" class="form-control" ref={(c) => this.password = c} name="password" style ={{backgroundColor: "#d92027"}}/><button class="btn btn-outline-success ml-2 " aria-label="Search">Log In</button></div>
            </form>
            
        )
    }
}

export default Form;
