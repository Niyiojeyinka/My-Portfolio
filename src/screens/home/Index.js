import React,{Component} from 'react';
import Nav from '../common/Nav';
import About from './About';
import Sidebar from '../common/Sidebar';
//import PieChart from './PieChart';
import Stacks from './Stacks';

class Home extends Component {


render() {
    return (
<div className='row min-vh-100'>
       
    
       <div className='col-sm-4 col-md-4 col-lg-3 col-xl-3 w3-teal'>

       <Sidebar/>

       </div>
       <div className='col-sm-8 col-md-8 col-lg-9 col-lg-9'>
       <div>
        <div className="w3-row">
            <Nav/>
            <div className="">
        <About/>

            </div>
            
           

        </div>
         <Stacks/>
         </div>
       </div>
   </div>       
    );
}


}
export default Home;