import React,{Component} from 'react';
import Home from './screens/home/Index';
import Projects from './screens/projects/Index';
import Articles from './screens/articles/Index';
import "./styles/w3.css";
import {
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
constructor(props){
    super(props);
}

render() {

    return (
      <Switch>
      <Route path="/articles" component={Articles}/>
      <Route path="/projects" component={Projects}/>
      <Route exact path="/" component={Home}/>
    </Switch>
    
    );
}


}
export default App;
