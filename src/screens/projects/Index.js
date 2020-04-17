import React,{Component} from 'react';
import Nav from '../common/Nav';
import Sidebar from '../common/Sidebar';
import ProjectsList from './ProjectList';

class Projects extends Component {


render() {
    return (
        <div className='row min-vh-100'>
       
    
       <div className='col-sm-4 col-md-4 col-lg-3 col-xl-3 w3-teal'>

       <Sidebar/>

       </div>
       <div className='col-sm-8 col-md-8 col-lg-9 col-lg-9'>
       <div className="w3-row ">
            <Nav/>
            <br></br><br></br><br></br>
            <div className="w3-center">
            <span className="w3-margin-top w3-xxxlarge" style={{color:"rgba(39, 28, 28, 0.74)"}}>Projects</span>
            </div>  <ProjectsList/>
           
         </div>

       </div>
   </div>


        
    );
}


}
export default Projects;