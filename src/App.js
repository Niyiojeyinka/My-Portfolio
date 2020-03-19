import React,{Component} from 'react';
import Home from './screens/home/Index';
import Projects from './screens/projects/Index';
import "./styles/w3.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
constructor(props){
    super(props);
}

render() {

    return (
      <Router> <Switch>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
      </Router>
    );
}


}
export default App;
