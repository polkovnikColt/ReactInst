import React from "react"
import Main from "./pages/main"
import Photo from "./pages/photo"
import Registr from "./pages/registration"
import NavBar from "./componentsNavAndContent/navbar"
import {createStore} from 'redux'
import { connect, Provider } from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const UNLOG = {
           type: 'UNLOG',
           payload: false
    }
  
const LOG =  {
           type: 'LOG',
           payload: true
       }
    
let initState = {
    logged: false
}

const store = createStore(reducer);

function reducer(state = initState, action){
    switch(action.type){
        case 'UNLOG': return {...state, logged: action.payload}
        case 'LOG': return   {...state, logged: action.payload}
    }
    return state;
}

const mapStateToProps = (state) =>{
    return{
        logged: state.logged 
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        log: () =>{ dispatch(LOG);
                   console.log(store.getState())},
        unlog:() => {dispatch(UNLOG);console.log(store.getState())}
    }
}

const WrappedNavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar);
const WrappedMain = connect(mapStateToProps, mapDispatchToProps)(Main);

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <Provider store = {store}>
      <WrappedNavBar />
      <BrowserRouter>
            <Switch>
       <Route path ={'/'} exact component = {WrappedMain} />
       <Route path = {'/photo'} exact component = {Photo} />    
       <Route path = {'/registration'} exact component = {Registr} />    
            </Switch>
       </BrowserRouter>
            </Provider>
            </div>
        );
    }
}

export default App;