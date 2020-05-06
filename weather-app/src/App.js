import React from 'react';
import './App.css';
import F from "./component/f"
import S from "./component/s"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      t:false,
      data:[]
    }
  }
  render(){
    return(<Router> 
            <div>
              <Route exact path="/weather/:id" component={S}></Route>
              <Route exact path="/" component={F}></Route>
            </div>
          </Router>)
    }

}

export default App;
