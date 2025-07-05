import { useState,useEffect, use } from "react"
import { Link, useNavigate } from "react-router-dom";
import newsImg from '/logo.png'
import Header from "./Header";
import API from "../axios";


function BlogList(){
    const [newsList, setNews] = useState(null);
    const navigate = useNavigate();

         useEffect(()=>{
                          API.get("/news").then(res=>setNews(res.data));
                        },[])

    return(
        <>
        
            <div className="container section-padding">
            <div className="row">
                <div className="col-lg-12 col-12 mb-5">
                         <h2 className="newsTitle">News</h2>
                </div>
            </div>
                <div className="newsContainer">
                     {newsList&& newsList.map(news=>{
                       const newsImage = news.image ? news.image:newsImg;
                        return(
                        <div key={news._id} className="row" onClick={()=>{navigate('/news/'+news._id)}}>
                         <div >
                            
                                <div className="newsCard featured-block my-3">
                                <img src={newsImage} alt="card-img"/>
                                <div className="content">
                                    
                                    <h3>{news.title}</h3>
                                    <p className="text-truncate">{news.content}</p>
                                    <Link className="featured-block-read " >Read more....</Link>
                                    <div className="meta">
                                    
                                    <span className="date">{new Date(news.date).toLocaleDateString('en-IN',{
                                      day:"numeric",
                                      month:"long",
                                      year:"2-digit"
                                    })}</span>
                                    </div>
                                </div>
                              
                                
                            </div>   
                </div>
                    </div>
                       )})}
                </div>
                
            </div>
                
            

        </>
    )
}
export default BlogList