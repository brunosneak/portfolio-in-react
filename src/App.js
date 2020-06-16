import React from 'react';
import { Home, NavPage, CvPage } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactPage from './components/contactPage/ContactPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route path="/navPage" component={ NavPage }></Route>
        <Route path="/cvPage" component={ CvPage }></Route>
        <Route path="/contactPage" component={ ContactPage }></Route>
      </Switch>
    </Router>
  )
}

export default App;