import React, {Component} from 'react';
import { FaGithub} from 'react-icons/fa';
import { GiClick} from 'react-icons/gi';


class ProjectList extends Component {
constructor(props){
  super(props);
  this.state = {projects:[
    {name:"AdNetwork",description:"Advertising Network Server  (password:user,email:user@gmail.com)",image:"https://i.ibb.co/nRL91yj/advertiseradtype.png",link:"http://niyiojeyinka.byethost7.com/ads",github:"https://github.com/Niyiojeyinka/PHP-AdsNetworkServer-",stacks:["PHP","MYSQL"]},
    {name:"Web Creator",description:"An Online theme based web creator and designer that let users create their own website in few clicks(password:user,email:user@gmail.com)",image:"https://i.ibb.co/zbBxKzV/web2.png",link:"http://niyiojeyinka.byethost7.com/web",github:"https://github.com/Niyiojeyinka/Simple-Theme-Based-Web-builder",stacks:["PHP","MYSQL"]},
    {name:"CBT",description:"A Computer Based Testing Software ideally for schools and colleges(password:user,email:user@gmail.com)",image:"https://i.ibb.co/Wv0Qz3r/cbt.png",link:"http://niyiojeyinka.byethost7.com/cbt",github:"https://github.com/Niyiojeyinka/PHPonlineCBT-",stacks:["PHP","MYSQL"]},
    {name:"Multi school Management",description:"A Website (SAAS) that lets schools create a  school management web software and also a website(password:user,phone:12345678)",image:"https://i.ibb.co/zNdXKwq/getd.png",link:"https://http://niyiojeyinka.byethost7.com/csm",github:"https://github.com/Niyiojeyinka/PHP-Multi-Cloud-School-Management-",stacks:["PHP","MYSQL"]},
    {name:"Pryper Q Bet",description:"A Question Betting Web Apllication that let people bet on Questions from topics they care about (password:user,email:user@gmail.com)",image:"http://niyiojeyinka.byethost7.com/projects/py.png",link:"http://niyiojeyinka.byethost7.com/bet",github:"https://github.com/Niyiojeyinka/My-Portfolio.git",stacks:["PHP","MYSQL"]},
    {name:"Page Chat",description:"A One page Chat  web application written in PHP ,JAVSCRIPT and MYSQL",image:"http://niyiojeyinka.byethost7.com/projects/opc.png",link:"https://niyiojeyinka.heroku.com",github:"https://github.com/Niyiojeyinka/My-Portfolio.git",stacks:["PHP","MYSQL"]},
    {name:"My Portfolio",description:"My portfolio website created with React,Bootstrap CSS framework",image:"http://niyiojeyinka.byethost7.com/projects/portfolio.png",link:"https://niyiojeyinka.heroku.com",github:"https://github.com/Niyiojeyinka/My-Portfolio.git",stacks:["PHP","MYSQL"]},
    {name:"E-voting",description:"An online voting web application software Backend (password:admin,username:admin) login link:{domain}/index.php/officer .",image:"http://niyiojeyinka.byethost7.com/projects/vote.png",link:"https://niyiojeyinka.heroku.com",github:"https://github.com/Niyiojeyinka/My-Portfolio.git",stacks:["PHP","MYSQL"]},
    {name:"Social Media",description:"A Social Media web application for users to meet and chat.",image:"http://niyiojeyinka.byethost7.com/projects/sm.png",link:"https://niyiojeyinka.heroku.com",github:"https://github.com/Niyiojeyinka/My-Portfolio.git",stacks:["PHP","MYSQL"]},
    {name:"CSV Tools",description:"A developer PHP class to generate a CSV file.",image:"http://niyiojeyinka.byethost7.com/projects/csv.png",link:"https://niyiojeyinka.heroku.com",github:"https://github.com/Niyiojeyinka/My-Portfolio.git",stacks:["PHP","MYSQL"]},
    {name:"Business Listing",description:"A Classic Business directory website(password:admin,email:admin@gmail.com)",image:"http://niyiojeyinka.byethost7.com/projects/listing.png",link:"https://niyiojeyinka.heroku.com",github:"https://github.com/Niyiojeyinka/PHPonlineCBT-",stacks:["PHP","MYSQL"]},

]};
}
render(){
    let projects = this.state.projects.map(
        (project,index)=>{
       return <div key={index} className="w3-card-4 w3-margin w3-col l5 m5 s12 w3-display-container">
           <span className="w3-padding w3-https://i.ibb.co/nRL91yj/advertiseradtype.pngteal w3-bold w3-display-topleft w3-display-hover">{`${project.name}`}</span>
           <img src={`${project.image}`} alt={project.name} className="" style={{maxHeight:"150px",width:"100%"}}></img>
           <div className="w3-padding w3-small"><p>{`${project.description}`}</p></div>
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