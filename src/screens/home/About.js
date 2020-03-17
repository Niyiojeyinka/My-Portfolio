import React from 'react';
import { FaGithub} from 'react-icons/fa';

let About =()=>{
return (
<div className="w3-padding-large">
    <span className="w3-xxxlarge" style={{color:"rgba(39, 28, 28, 0.74)"}}><strong>Software Developer</strong></span>
       <div className="w3-padding-xlarge" style={{letterSpacing:"0.11em"}}> <p className="w3-large w3-justify">
        A Full-stack developer with more than three years experience developing both backend and frontend of a scalable applications.
        <br></br>Started learning to code around 2014 and by 2016 started working on real-life freelance gigs
        </p>

        </div>
        <button className="w3-btn w3-xlarge w3-padding w3-margin-left w3-round" style={{backgroundColor:"rgb(0, 150, 110)"}} > <FaGithub/> <span className="w3-small"> Visit Github</span></button>
        </div>
)

}
export default About;