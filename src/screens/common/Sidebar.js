import React,{Component} from 'react';
import profile from "../../assets/profile.jpg";
import "../../styles/profile.css";
import { FaGithub,FaLinkedinIn,FaTwitter} from 'react-icons/fa';
import {IoMdDownload} from 'react-icons/io';


class Sidebar extends Component {
constructor(props){
    super(props);
    this.state={ icons:[{link:"https://www.github.com/niyiojeyinka",icon:<FaGithub/>},
    {link:"https://www.linkedin.com/in/niyiojeyinka",icon:<FaLinkedinIn/>},
    {link:"https://www.twitter.com/niyiojeyinka",icon:<FaTwitter/>},
]};
}

render() {
    let iconsLink = this.state.icons.map((eachIcon,index)=>{
return <span key={index}>
    <a href={`${eachIcon.link}`}> <span className="w3-xxlarge w3-margin">{eachIcon.icon}</span></a>
</span>

    });
    return (
       <div className="w3-padding-large">
           <br></br><br></br>
               <img src={profile} className="profile w3-circle" style={{width:"60%"}}/>
           <div className="w3-padding w3-justify profileText">
<p className="w3-large lead" style={{letterSpacing:"1px"}}>I'm a fullstack Software developer who loves creating solutions that work</p>
           </div>
           {iconsLink}
          <hr className="w3-text-black"></hr>
<div className="w3-padding-large">
<button className="w3-btn w3-large w3-hide-large" style={{backgroundColor:"rgb(0,150,110)"}}><IoMdDownload/> Download resume</button>

<a href='/resume.pdf' className="w3-btn w3-large w3-padding w3-hide-small w3-hide-medium w3-text-white" style={{backgroundColor:"rgb(0,150,110)"}}><IoMdDownload/> Download resume</a>
</div>  </div>
    );
}


}
export default Sidebar;