import React from 'react'
import Panel from "../componentsForum/searchPanel"
import Comments_Links from "../componentsNavAndContent/comments&links"
class Photo extends React.Component{
    render(){
        return(
        <div>
            <Panel />
            <Comments_Links />
            </div>
        )
    }
}

export default Photo;