import React, {Component} from 'react';
import { FaGithub} from 'react-icons/fa';
import { GiClick} from 'react-icons/gi';


class ProjectList extends Component {
constructor(props){
  super(props);
  this.state = {projects:[
    {name:"My Portfolio",description:"My portfolio created with React,Bootstrap and CSS framework",image:"https://growtraffic-bc85.kxcdn.com/blog/wp-content/uploads/2019/05/AdSense-and-Other-Ads.jpg",link:"https://niyiojeyinka.heroku.com",github:"https://www.github.com/niyiojeyinka",stacks:["PHP","MYSQL"]},
    {name:"AdNetwork",description:"An Online Advertising Network Server",image:"https://growtraffic-bc85.kxcdn.com/blog/wp-content/uploads/2019/05/AdSense-and-Other-Ads.jpg",link:"",github:"https://www.github.com/niyiojeyinka",stacks:["PHP","MYSQL"]},
    {name:"AWS",description:"Amazon Web Services US",image:"https://d1nzzttg89jj6.cloudfront.net/assets/articles/1575354413/klarna-signs-deal-with-aws-1575354413.png",link:"",github:"",stacks:["PHP","MYSQL"]},
    {name:"stripe",description:"An Online Payment Service",image:"https://www.foxnetsoft.com/images/thumbs/0005839_stripe-direct-payment-credit-card.png",link:"",github:"",stacks:["PHP","MYSQL"]},

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