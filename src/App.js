import React,{Component} from 'react';
import Sidebar from './screens/common/Sidebar';
import Home from './screens/home/Index';
import "./styles/w3.css";
class App extends Component {
constructor(props){
    super(props);
}

render() {

    return (
      <div className='row min-vh-100'>
        <div className='col-sm-4 col-md-4 col-lg-3 col-xl-3 w3-teal'>

        <Sidebar/>

        </div>
        <div className='col-sm-8 col-md-8 col-lg-9 col-lg-9'>
        <Home/>


        </div>
    </div>
    );
}


}
export default App;
