import React,{Component} from 'react';
class Sidebar extends Component {
constructor(props){
    super(props);
}

render() {
    return (
       <div className="p-5 display-3">
           <span style={{color:"white"}} className="lead font-weight-bolder text-xlarge">Olaniyi Philip Ojeyinka</span>
       </div>
    );
}


}
export default Sidebar;