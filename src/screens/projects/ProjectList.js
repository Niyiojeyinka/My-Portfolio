import React, {Component} from 'react';
class ProjectList extends Component {
constructor(props){
  super(props);
  this.state = {projects:[
    {name:"Advertising Network Server",description:"An Advertising Network Server",image:"",link:"",github:"",stacks:["PHP","MYSQL"]},
  ]};
}
render(){
    let projects = this.state.projects.map(
        (project)=>{
       return <div>project 1</div>  

        }
    );
    return (
     <div>
        {projects}
     </div>

    );
}

}
export default ProjectList;