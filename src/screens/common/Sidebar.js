import React,{Component} from 'react';
import profile from "../../assets/profile.jpg";
import "../../styles/profile.css";



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
       </div>
    );
}


}
export default Sidebar;