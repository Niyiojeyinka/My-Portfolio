import React, { Component } from 'react';

class Stacks extends Component {

    constructor(props){
         super(props);
         this.state ={stacks:[
             ["Javascript","use javascript programming language to write a beautiful & Scalable Frontend and Backend of web & mobile applications"],
             ["React","use the React library to write a beautiful  Frontend  of  web applications"],
             ["NodeJS","use the NodeJS & Express runtime/framework to write a scalable backend  of  web applications"],
             ["PHP","use PHP programming language to write a beautiful & Scalable Frontend and Backend of web applications"],
             ["Laravel","use Laravel Framework to write a scalable Backend of web applications"],
             ["Codeigniter","use Codeigniter Framework to write a scalable Backend of web applications"],
             ["Sql","use the SQL to write a query databases"],
             ["ReactNative","use ReactNative framework to create elagants mobile applications"],
            ]};
    }

    

    render(){
        let eachStack = this.state.stacks.map((eachElement)=>{
            return <div className="w3-col s6 l3">{eachElement}
             </div>;
        });
        
        return (
            <div className="w3-container">
            <span className="w3-xlarge w3-margin-top w3-margin-left w3-border-teal w3-bottombar" style={{color:"rgb(39, 28, 28, 0.74)"}}><strong>Technical Proficiencies</strong></span>
            <br></br>
            
            <div className="w3-row w3-padding">
            
        {eachStack}
            </div></div>);
    }
}

   

export default Stacks;