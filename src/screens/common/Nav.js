import React,{Component} from 'react';
class Nav extends Component {
constructor(props){
    super(props);
}

render(){
    return (
	<header className="w3-bar w3-border-bottom w3-border-teal w3-xlarge w3-white w3-padding w3-top w3-tansparent" style={{height:"60px"}}>
   <div  className="w3-center w3-small w3-margin-top">
   <a className="w3-bar-item w3-margin-left w3-padding w3-teal w3-text-white w3-round-jumbo">Home</a> 

   <a className="w3-bar-item w3-margin-left w3-padding w3-hover-teal w3-hover-text-white w3-round-jumbo">Resume</a> 

        <a className="w3-margin-left w3-padding w3-hover-teal w3-hover-text-white w3-round-jumbo">Portfolio</a> 
        <a className="w3-bar-item w3-margin-left w3-padding w3-hover-teal w3-hover-text-white w3-round-jumbo">Articles</a> 

        </div></header>);
}


}
export default Nav;