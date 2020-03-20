import React, {Component} from 'react';
import { FaGithub,FaEye} from 'react-icons/fa';
import { GiClick} from 'react-icons/gi';


class Articles extends Component {
constructor(props){
  super(props);
  this.state = {articles:[
    {title:"A new type of AdNetwork",excerpt:"An Online Advertising Network Server",image:"https://growtraffic-bc85.kxcdn.com/blog/wp-content/uploads/2019/05/AdSense-and-Other-Ads.jpg",link:""},
    {title:"A new type of AdNetwork",excerpt:"An Online Advertising Network Server",image:"https://growtraffic-bc85.kxcdn.com/blog/wp-content/uploads/2019/05/AdSense-and-Other-Ads.jpg",link:""},
    {title:"A new type of AdNetwork",excerpt:"An Online Advertising Network Server",image:"https://growtraffic-bc85.kxcdn.com/blog/wp-content/uploads/2019/05/AdSense-and-Other-Ads.jpg",link:""},

]};
}
render(){
    let articlesList = this.state.articles.map(
        (article)=>{
       return <div className="w3-card-4 w3-margin w3-col l3 m4 s12">
           <img src={`${article.image}`} className="" style={{maxHeight:"150px",width:"100%"}}></img>
           <div className="w3-padding">
               <strong>{`${article.title}`}</strong>
               <p>{`${article.excerpt}`}</p></div>
           <div className="w3-row w3-small w3-center w3-padding w3-margin">
   <a href={`${article.link}`} className="w3-button w3-hover-text-black w3-border w3-padding">Read Post <span className="w3-small w3-margin-bottom"><FaEye/></span></a>  


           </div>

       </div>  

        }
    );
    return (
     <div className="w3-row w3-margin-top w3-padding-top">
        {articlesList}
     </div>

    );
}

}
export default Articles;