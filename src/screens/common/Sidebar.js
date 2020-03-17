import React,{Component} from 'react';
import profile from "../../assets/profile.jpg";
import "../../styles/profile.css";
import { FaGithub,FaLinkedinIn,FaTwitter} from 'react-icons/fa';
import { IoLogoWhatsapp,IoMdDownload} from 'react-icons/io';


class Sidebar extends Component {
constructor(props){
    super(props);
}

render() {
    return (
       <div className="w3-padding-large">
           <div className="w3-text-white w3-bold w3-xxxlarge w3-margin-left w3-margin-top">Olaniyi Philip Ojeyinka</div>
               <img src={profile} className="profile w3-circle" style={{width:"60%"}}/>
           <div className="w3-padding w3-justify profileText">
<p className="w3-xlarge lead" style={{letterSpacing:"1px"}}>I'm a fullstack Software developer who loves creating solutions that work</p>
           </div>
           <span className="w3-xxxlarge w3-margin"><FaGithub/></span>
           <span className="w3-xxxlarge w3-margin"><FaLinkedinIn/></span>
           <span className="w3-xxxlarge w3-margin"><FaTwitter/></span>
           <span className="w3-xxxlarge w3-margin"><IoLogoWhatsapp/></span>
           <hr className="w3-text-black"></hr>
<div className="w3-padding-large">
<button className="w3-btn w3-large w3-hide-large" style={{backgroundColor:"rgb(0,150,110)"}}><IoMdDownload/> Download resume</button>

<button className="w3-btn w3-large w3-padding-large w3-hide-small w3-hide-medium" style={{backgroundColor:"rgb(0,150,110)"}}><IoMdDownload/> Download resume</button>
</div>  </div>
    );
}


}
export default Sidebar;