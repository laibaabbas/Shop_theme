import React, { Component } from "react";
import data from "./shopData"
import Nav from "./Nav/Nav";
import Header from "./pages/shop/header";

class App extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
        data:data
      }
    }
  
  render() {
    return (
      <div >
      <Nav  nav={this.state.data[0].nav}/>
      <Header/>
      </div>
    );
  }
}
export default App;
