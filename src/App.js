import React from 'react';
import { Home, NavPage, CvPage } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route path="/navPage" component={ NavPage }></Route>
        <Route path="/cvPage" component={ CvPage }></Route>
      </Switch>
    </Router>
  )
}

export default App;