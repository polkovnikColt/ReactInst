import React from "react"

class Alert extends React.Component {
    constructor(props){
        super(props);
        this.dispose = this.dispose.bind(this);
        this.state = {flag : "true"}
    }
    dispose = () => {
      this.setState({flag:"flase"})
    }
    render() {
        var message;
        if(this.state.flag === "false"){
         message = <div class = "container-fluid my-2 vue" > <div class = "container-fluid" style = {{display : "none"}} > <div class = "row rounded border border-success text-center align-items-end bg-lightgreen" height = "50" > <div class = "col-12" > Our photo of nature can make your day!!!                                                                                                                                                                                                         <button type = "button" class = "close mb-1" > <span >&times; < /span> </button> </div> </div> </div> </div>
        }
           if(this.state.flag === "true"){
              message = <div class = "container-fluid my-2 vue " > <div class = "container-fluid" > <div class = "row rounded border border-success text-center align-items-end bg-lightgreen" height = "50" > <div class = "col-12" > Our photo of nature can make your day!!! <button type = "button" class = "close mb-1"> <span onClick = {this.dispose}>&times; < /span> </button> </div> </div> </div> </div>
           }
        return (
            <div>
            {message}</div>
        );
    }
}

export default Alert;
