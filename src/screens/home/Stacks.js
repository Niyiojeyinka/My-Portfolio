import React, { Component } from 'react';
import { DiJavascript,DiCodeigniter,DiMysql} from 'react-icons/di';
import { FaReact,FaNodeJs,FaPhp,FaLaravel} from 'react-icons/fa';



class Stacks extends Component {

    constructor(props){
         super(props);
         this.state ={stacks:[
             ["Javascript","use javascript to write a beautiful & Scalable Frontend and Backend of web & mobile applications",<DiJavascript/>,"yellow"],
             ["React","use the React library to write a beautiful  Frontend  of  web applications",<FaReact/>,"blue"],
             ["NodeJS","use the NodeJS & Express runtime/framework to write a scalable backend  of  web applications",<FaNodeJs/>,"green"],
             ["PHP","use PHP programming language to write a beautiful & Scalable Frontend and Backend of web applications",<FaPhp/>,"indigo"],
             ["Laravel","use Laravel Framework to write a scalable Backend of web applications",<FaLaravel/>,"red"],
             ["Codeigniter","use Codeigniter Framework to write a scalable Backend of web applications",<DiCodeigniter/>,"pink"],
             ["Sql","use the SQL to write a query databases",<DiMysql/>,"blue"],
             ["ReactNative","use ReactNative framework to create elagants mobile applications",<FaReact/>,"indigo"],
            ]};
    }

    

    render(){
        let eachStack = this.state.stacks.map((eachElement)=>{
            return <div className="col-xl-3 col-md-4 col-lg-4 w3-col s6"><span className={`w3-text-${eachElement[3]} w3-jumbo`}>{eachElement[2]}</span>
            <p><strong>{eachElement[0]}</strong></p>
        <p className="w3-tiny justify" style={{width:"50%"}}>{eachElement[1]}</p>
             </div>;
        });
        
        return (
            <div className="w3-container">
            <span className="w3-xlarge w3-margin-top w3-margin-left w3-border-teal w3-bottombar" style={{color:"rgb(39, 28, 28, 0.74)"}}><strong>Technical Proficiencies</strong></span>
            <br></br>
            
          <div className="row w3-padding">

          {eachStack}
          </div>
            
       
            </div>);
    }
}

   

export default Stacks;