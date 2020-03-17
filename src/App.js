import React,{Component} from 'react';
import Sidebar from './screens/common/Sidebar';
import Home from './screens/home/Index';

class App extends Component {
constructor(props){
    super(props);
}

render() {

  let windowStyle = {height:"100vh"};
    return (
      <div className='row' style={windowStyle}>
        <div className='col-sm-4 col-md-4 col-lg-3 col-xl-3 bg-info'>

        <Sidebar/>

        </div>
        <div className='col-sm-8 col-md-8 col-lg-9 col-lg-9'>
        <Home/>

        <Sidebar/>

        </div>
    </div>
    );
}


}
export default App;
