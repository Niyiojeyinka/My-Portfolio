import React from 'react';
import { FaGithub} from 'react-icons/fa';

let About =()=>{
return (
<div className="w3-padding-large w3-center">
    <br></br><br></br>
    <span className="w3-xxxlarge" style={{color:"rgba(39, 28, 28, 0.74)"}}><strong>I'm Ojeyinka Olaniyi</strong></span>
       <div className="w3-padding-large" style={{letterSpacing:"0.11em"}}><center> <p className="w3-medium w3-justify" style={{textAlign:"center",maxWidth:"60ch"}}>
        A Full-stack developer with more than three years experience developing both backend and frontend of a scalable applications.
        <br></br>Started learning to code around 2014 and by 2016 started working on real-life freelance gigs.
        </p>
        <a href="https://www.github.com/niyiojeyinka" className="w3-btn w3-large w3-padding w3-margin-left w3-round w3-text-white" style={{backgroundColor:"rgb(0, 150, 110)"}} > <FaGithub/> <span className="w3-small"> Visit Github</span></a>

        </center>

        </div>
        </div>
)

}
export default About;