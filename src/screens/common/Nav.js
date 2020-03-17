import React,{Component} from 'react';
class Nav extends Component {
constructor(props){
    super(props);
}

render() {
    return (
       <div className="w3-border-bottom w3-border-teal w3-padding-xxlarge">
          <span className="w3-margin"> Contact me</span>
           <span className="w3-margin">Articles</span>
           <span className="w3-margin">Resume</span>
           <span className="w3-margin ">Portfolio</span>
          
       </div>
    );
}


}
export default Nav;