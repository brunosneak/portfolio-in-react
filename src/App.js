import React from 'react';
import { Home, NavPage, CvPage, GamePage } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactPage from './components/contactPage/ContactPage';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route path={["/navPage", "/navPage1", "/navPage2"]} component={ NavPage }></Route>
        <Route path="/cvPage" component={ CvPage }></Route>
        <Route path="/contactPage" component={ ContactPage }></Route>
        <Route path="/gamePage" component={ GamePage }></Route>
      </Switch>
    </Router>
  )
}

export default App;