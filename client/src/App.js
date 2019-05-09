import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import Detail from "./pages/Detail.js";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Home} />
          <Route exact path="/blogs/:id" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
