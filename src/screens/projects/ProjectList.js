import React, {Component} from 'react';
import { FaGithub} from 'react-icons/fa';
import { GiClick} from 'react-icons/gi';


class ProjectList extends Component {
constructor(props){
  super(props);
  this.state = {projects:[
    
    {name:"Pryper Q Bet",description:"A Question Betting Web Apllication that let people bet on Questions from topics they care about",image:"http://localhost/pryper/assets/images/prypersocialimage.png",link:"https://niyiojeyinka.heroku.com",github:"https://github.com/Niyiojeyinka/My-Portfolio.git",stacks:["PHP","MYSQL"]},
    {name:"AdNetwork",description:"An Online Advertising Network Server for publishers and advertisers",image:"http://localhost/pryper/assets/images/advertiseradtype.png",link:"",github:"https://www.github.com/niyiojeyinka",stacks:["PHP","MYSQL"]},
    {name:"My Portfolio",description:"My portfolio website created with React,Bootstrap and CSS framework",image:"http://localhost/pryper/assets/images/portfolio.png",link:"https://niyiojeyinka.heroku.com",github:"https://github.com/Niyiojeyinka/My-Portfolio.git",stacks:["PHP","MYSQL"]},
]};
}
render(){
    let projects = this.state.projects.map(
        (project)=>{
       return <div className="w3-card-4 w3-margin w3-col l3 m4 s12 w3-display-container">
           <span className="w3-padding w3-teal w3-bold w3-display-topleft w3-display-hover">{`${project.name}`}</span>
           <img src={`${project.image}`} className="" style={{maxHeight:"150px",width:"100%"}}></img>
           <div className="w3-padding"><p>{`${project.description}`}</p></div>
           <div className="w3-row w3-small">
<div className='w3-col l6 m6 s6 w3-padding-small w3-center w3-border-right w3-border-gray'>
   <a href={`${project.github}`} className="w3-button w3-hover-text-black">View source <span className="w3-small w3-margin-bottom"><FaGithub/></span></a>  
</div>
<div className='w3-col l6 m6 s6 w3-padding-small w3-center w3-border-left w3-border-gray'>
<a href={`${project.link}`} className="w3-button w3-hover-text-black">Live/Demo <span className="w3-small w3-margin-bottom"><GiClick/></span></a>
</div>

           </div>

       </div>  

        }
    );
    return (
     <div className="w3-row w3-margin-top w3-padding-top">
        {projects}
     </div>

    );
}

}
export default ProjectList;