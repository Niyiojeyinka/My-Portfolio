import React,{Component} from 'react';
import Nav from '../common/Nav';
import Sidebar from '../common/Sidebar';
import ProjectsList from './ProjectList';

class Projects extends Component {
    componentDidMount(){
        document.title= "Olaniyi Philip Ojeyinka | Projects";
    }

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
            <br></br>
        <span className="w3-small w3-text-gray"><b>Notice :</b>Some functionality like (dynamic
         creation of a subdomain) may not be available on the demo due to hosting/server limitation</span>
        <br></br>
            </div>  <ProjectsList/>
           
         </div>

       </div>
   </div>


        
    );
}


}
export default Projects;