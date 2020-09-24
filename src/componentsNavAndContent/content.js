import React from "react"
import Item from "./contentOneItem"



const links = [
    {link: "https://natworld.info/wp-content/uploads/2016/08/Igra-solnechnogo-sveta-v-utrennem-lesu-1026x500.jpg",
    title: "Forests"},
    {link: "https://сезоны-года.рф/sites/default/files/images/shkolnikam/vodopad.jpg",
    title: "Water"},
    {link: "https://img1.fonwall.ru/o/qu/ptica-korichnevyy-temno.jpg",
    title: "Fauna"},
    {link: "https://w-dog.ru/wallpapers/11/18/538240939489289.jpg",
    title: "Flore"}, 
    {link: "https://images.wallpaperscraft.ru/image/peshchera_temnyj_skala_158104_1920x1080.jpg",
    title: "Buildings"}, 
    {link: "https://cdn.pixabay.com/photo/2018/05/10/14/39/nature-3387713_960_720.jpg",
    title: "Dark"},
    
    
]

class Content extends React.Component {
 
constructor(props){
    super(props);
    this.state = {title:""}
}
    
    getData = (title) =>{
       this.setState({title: title});
    }
    
    render() {
        return ( 
            <div getData = {() => {this.props.getData(this.state.title)}}>
           <div class="container-fluid ">
            <div class="container-fluid my-2">
                <div class="row mt-3 text-center outline-none justify-content-center">
            { links.map( (item) => (
             <Item items = {item} getData = {this.getData} />
            ))}
                </div>
    </div></div>
            <hr/>
            </div>
             

     
        );
    }
}

export default Content;
