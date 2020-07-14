import React, { Component } from 'react';
import { Home, CvPage, GamePage } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactPage from './components/contactPage/ContactPage';
import Header from './components/header/Header';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nav: false
    }
  }

  click = () => {
    this.setState({
      nav: !this.state.nav
    });
  }

  clickFalse = () => {
    this.setState({
      nav: false
    });
  }

  render(){
    const stateNav = this.state.nav;
    return (
        <Router>
          <Header nav={ this.click } stateNav={ stateNav }/>
          <Switch>
            <Route exact path="/" render={ () => <Home 
              navFalse={ this.clickFalse } 
              nav={ this.click }
              stateNav={ stateNav }/> }
            />
            <Route path="/cvPage" render={ () => <CvPage 
              navFalse={ this.clickFalse } 
              nav={ this.click } 
              stateNav={ stateNav }/> }
            />
            <Route path="/contactPage" render={ () => <ContactPage 
              navFalse={ this.clickFalse } 
              nav={ this.click } 
              stateNav={ stateNav }/> }
            />
            <Route path="/gamePage" render={ () => <GamePage 
              navFalse={ this.clickFalse } 
              nav={ this.click } 
              stateNav={ stateNav }/> }
            />
          </Switch>
        </Router>
      )
    }
}

export default App;