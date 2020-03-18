import React,{Component} from 'react';
import Nav from '../common/Nav';
import About from './About';
import PieChart from './PieChart';
import Stacks from './Stacks';

class Home extends Component {
constructor(props){
    super(props);
}

render() {
    return (
        <div>
        <div className="w3-row">
            <Nav/>
            <div className="w3-half">
        <About/>

            </div>
            <div className="w3-half">
        <PieChart/>

            </div>
           

        </div>
         <Stacks/>
         </div>
    );
}


}
export default Home;