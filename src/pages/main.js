import React from 'react';
import Alert from "../componentsNavAndContent/alert"
import Content from "../componentsNavAndContent/content"
import Carousel from "../componentsNavAndContent/carousel"
import Comments_Links from "../componentsNavAndContent/comments&links"

class Main extends React.Component{
    constructor(props){
        super(props);
    
    }
    render(){
        return(
            <div>
            <Alert />
            <Carousel />
            <Content />
            <Comments_Links logged = {this.props.logged} />
            </div>
        )
    }
}
            
export default Main;