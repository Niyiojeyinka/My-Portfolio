import React,{Component} from 'react';
import {  Link } from 'react-router-dom';
import "../../styles/nav.css";
class Nav extends Component {
constructor(props){
    super(props);
}

render(){
    return (
	<header className="w3-bar w3-border-bottom w3-border-teal w3-xlarge w3-white w3-padding w3-top w3-tansparent" style={{height:"60px"}}>
   <div  className="w3-left w3-small w3-margin-top">
   <span  className="w3-bar-item  w3-padding w3-hover-teal w3-hover-text-white w3-round-jumbo w3-margin-left"><Link to="/">Home</Link></span>
   <span  className="w3-bar-item  w3-padding w3-hover-teal w3-hover-text-white w3-round-jumbo w3-margin-left"><Link to="/resume.pdf">Resume</Link></span>
    <span  className="w3-bar-item  w3-padding w3-hover-teal w3-hover-text-white w3-round-jumbo w3-margin-left"><Link to="/projects">Projects</Link></span>
    <span  className="w3-bar-item  w3-padding w3-hover-teal w3-hover-text-white w3-round-jumbo w3-margin-left"><Link to="/articles">Articles</Link></span>

        </div></header>);
}


}
export default Nav;