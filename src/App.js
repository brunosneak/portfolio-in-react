import React, { Component } from 'react';
import { Home, CvPage, GamePage } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactPage from './components/contactPage/ContactPage';
import Header from './components/header/Header';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nav: false,
      game: false
    }
  }

  click = () => {
    this.setState({
      nav: !this.state.nav
    });
  }

  game = () => {
    this.setState({
      game: !this.state.game
    });
  }

  render(){
    const stateNav = this.state.nav;
    return (
        <Router>
          <Header nav={ this.click } stateNav={ stateNav } stateGame={ this.state.game }/>
          <Switch>
            <Route exact path="/" render={ () => <Home 
              nav={ this.click }
              stateNav={ stateNav }/> }
            />
            <Route path="/cvPage" render={ () => <CvPage 
              nav={ this.click } 
              stateNav={ stateNav }/> }
            />
            <Route path="/contactPage" render={ () => <ContactPage 
              nav={ this.click } 
              stateNav={ stateNav }/> }
            />
            <Route path="/gamePage" render={ () => <GamePage 
              nav={ this.click } 
              stateNav={ stateNav }
              game={ this.game }
              stateGame={ this.state.game }
              /> }
            />
          </Switch>
        </Router>
      )
    }
}

export default App;