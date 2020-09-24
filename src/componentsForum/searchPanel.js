import React from "react"
import Photo from "./onePhoto"
import Item from "../componentsNavAndContent/contentOneItem"

const links = [
    {link : "https://img.tsn.ua/cached/1574864746/tsn-87394d020f46df1bdfb04b5785c6f4e0/thumbs/1340x530/84/83/a32305072c1adfed28d7eed1961c8384.jpeg",
    type: "water",
    date: ""},
    {link: "https://cameralabs.org/aeonmedia/zenfoto/932/5978/tjomnye-gory-finalist-v-kategorii-pejzazh-i-priroda-avtor-aurelio-bormioli_large.jpg",
    type:"dark",
    date: new Date().toLocaleDateString()},
    {link: "https://i.pinimg.com/originals/9e/24/f5/9e24f50f42a1e58e8a540351630f36fc.jpg",
    type:"dark",
    date: new Date().toLocaleDateString()
    },
    {link: "https://cdn.pixabay.com/photo/2020/01/21/18/59/nature-4783710_960_720.jpg",
    type: "forest",
    date: new Date().toLocaleDateString()
    }, {link : "https://img.tsn.ua/cached/1574864746/tsn-87394d020f46df1bdfb04b5785c6f4e0/thumbs/1340x530/84/83/a32305072c1adfed28d7eed1961c8384.jpeg",
    type: "water",
    date: new Date().toLocaleDateString()},
    {link: "https://cameralabs.org/aeonmedia/zenfoto/932/5978/tjomnye-gory-finalist-v-kategorii-pejzazh-i-priroda-avtor-aurelio-bormioli_large.jpg",
    type:"dark",
    date: new Date().toLocaleDateString()},
    {link: "https://i.pinimg.com/originals/9e/24/f5/9e24f50f42a1e58e8a540351630f36fc.jpg",
    type:"dark",
    date: new Date().toLocaleDateString()
    },
    {link: "https://cdn.pixabay.com/photo/2020/01/21/18/59/nature-4783710_960_720.jpg",
    type: "forest",
    date: new Date().toLocaleDateString()
    }
]

var filterLinks =[];

class Panel extends React.Component {
   constructor(props){
       super(props);
       this.state = {photoCount: 4,array:[]};
   }
    
    preRoll = (array) =>{
        var tempArray = [];
    for(var i = 0; i < this.state.photoCount; i++){
            tempArray.push(array[i]);
    }
        this.setState({array: tempArray});
    }
    
    more = () =>{
      this.setState({photoCount: 4 + this.state.photoCount});
        console.log(this.state.photoCount)
        if(filterLinks.length >= this.state.photoCount || links.length <= this.state.photoCount){
     (filterLinks.length > 0) ? this.preRoll(filterLinks) : this.preRoll(links);
        }
        else{
            alert("New photo wait for you soon!!!")
        }
    }
    
    componentDidMount(){
    this.preRoll(links);
    console.log(this.state.photoCount)
    };


    handleClickAll = (e) => {
      e.preventDefault();
     filterLinks = [];
     this.preRoll(links);
    
    };

    handleClickNew = (e) =>{
        e.preventDefault();
        var date = new Date().toLocaleDateString();
        filterLinks = links.filter(item => item.date === date);
        this.preRoll(filterLinks);
        
    };
    
    

    render() {
        return (
 <div class="container-fluid mt-5 " id = "forum">
        <div class="container-fluid mt-1 p-3">
            <div class="row text-center">
                <div class="col-lg-4  col-md-3 col-sm-12 col-xs-12 rounded">
                    <h3 class="font-title-small link">Photo Search</h3>
                            <div class="list-group my-3 py-3">
                                <button onClick = {this.handleClickAll} type="button" class="list-group-item list-group-item-action p-3" style={{backgroundColor: "inherit"}}>All</button>
                                <button onClick={this.handleClickNew}type="button" class="list-group-item list-group-item-action p-3" style={{backgroundColor: "inherit"}}>New</button>
                                <button type="button" class="list-group-item list-group-item-action p-3" style={{backgroundColor: "inherit"}}>Last Week</button>
                                <button type="button" class="list-group-item list-group-item-action p-3" style={{backgroundColor: "inherit"}}>Popular</button>
                               
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-7 col-sm-12 col-xs-12" id = "photoStream">
                       {this.state.array.map( item  =>(
        <Photo param = {item} />
        ))}
                        <button className = "go-to-top" onClick = {this.more}>More</button>
                        <br/><br/>
                        <a class="go-to-top font-small active" href ="#photoStream">/\</a></div>
                    </div>
            </div>
                        <hr className= "my-3"/>
        </div>
        );
    }
}

export default Panel;