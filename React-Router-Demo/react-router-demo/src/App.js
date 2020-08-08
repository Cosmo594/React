import React from 'react';
import Home from "./pages/Home";
import Mine from "./pages/Mine";
import UCenter from "./pages/UCenter"
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./componets/Nav"
import NotFound from "./pages/NotFound"
import Demo from "./pages/Demo"
import Shop from "./pages/Shop"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Redirect from="/hellomine" to="/mine" />
          <Route exact path="/" component={Home}></Route>
          <Route strict exact={true} path="/mine" component={Mine}></Route>
          <Route path="/mine/ucenter/:id?/:name?" component={UCenter}></Route>
          <Route path="/demo" render={(props) => <Demo {...props} name="你好"/>}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
