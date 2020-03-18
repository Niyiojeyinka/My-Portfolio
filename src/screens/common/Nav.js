import React,{Component} from 'react';
class Nav extends Component {
constructor(props){
    super(props);
}

render(){
    return (
	<header className="w3-bar w3-border-bottom w3-border-teal w3-xlarge w3-cell-row w3-white w3-padding" style={{height:"60px"}}>
   <div  className="w3-right w3-small  w3-large">
   <a className="w3-bar-item w3-margin-left w3-padding w3-teal w3-text-white w3-round-jumbo">Home</a> 

   <a className="w3-bar-item w3-margin-left w3-padding w3-hover-teal w3-hover-text-white w3-round-jumbo">Resume</a> 

        <a className="w3-bar-item w3-margin-left w3-padding w3-hover-teal w3-hover-text-white w3-round-jumbo">Portfolio</a> 
        <a className="w3-bar-item w3-margin-left w3-padding w3-hover-teal w3-hover-text-white w3-round-jumbo">Articles</a> 
        <a className="w3-bar-item w3-margin-left w3-margin-right w3-padding w3-hover-teal w3-hover-text-white w3-round-jumbo">Contact Me</a> 

        </div></header>);
}


}
export default Nav;