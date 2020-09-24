import React from "react"


class Photo extends React.Component {
    constructor(props){
        super(props);
        this.state = {visibility: "hidden",counter: 0, isLiked: false};
        console.log(this.state);
    }
    
    visible = (e) =>{
     e.preventDefault();
    if(!this.state.isLiked){
     this.setState({visibility: "visible",counter: ++this.state.counter,isLiked: true}) ;
     setTimeout(() =>{this.setState({visibility: "hidden"})},10)
        
    }}
    
    minusLike = (event) =>{
        event.preventDefault();
        
        if(this.state.counter <=0){
            return;
        }
        if(this.state.isLiked){
        this.setState({counter: --this.state.counter,isLiked:false})
    }}
   
    render() {
          var button;
          if(this.state.visibility === "hidden"){ 
             button = <span class = "button-liked" id = "goBig" style ={{visibility: "hidden"}}>♡</span>
    }
          if (this.state.visibility === "visible"){
            button = <span class = "button-liked"   style ={{visibility: "visible"}}>♡</span>
        }
        return (
                        <div class="container-fluid my-3">
                            <div class="row">
                                <button class = "w-100 bigButton " onClick = {this.visible} ><img src={this.props.param.link} alt="" class=" border rounded border-dark visible hover" height="400;" style ={{width:"inherit"}} /> </button>
                                {button}
                        <button class="like-button " onClick = {this.minusLike}> Like♡ {this.state.counter} </button>
            </div>
            <span>{this.props.param.date}</span>
          </div>
        );
    }
}

export default Photo;