import React from 'react'

class Item extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return ( <div class = "col-lg-4 col-xs-12 col-md-6 col-sm-12 mb-3" >
            <img src = {this.props.items.link} alt = "" class = "w-100 rounded " height = "300" / >
            < button class = "mt-1 w-100 font-title rounded border border-dark" style = {{backgroundColor: "inherit"}}
                onClick = {() => {this.props.getData(this.props.items.title)}}> 
                <span href = "" class = "link " > {this.props.items.title} < /span></button >
            <p> </p> </div>
        )
    }
}

 export default Item;