import { useState,useEffect, use } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"


function NewsList(){
    const [newsList, setNews] = useState(null);
    const navigate = useNavigate();

        useEffect(()=>{fetch("https://raw.githubusercontent.com/MRG-Hub-creater/BackEnd-Temp/refs/heads/main/db.json")
            .then((data)=> data.json())
            .then((data)=>{setNews(data.news);
              console.log(newsList)
            })
            .catch(err=>console.log("Error,",err))},[])   

    return(
        <>
            <div className="container section-padding">
            <div className="row">
                <div className="col-lg-12 col-12 mb-5">
                         <h2>News</h2>
                </div>
            </div>
                <div className="container ">
                     {newsList&& newsList.map(news=>{
                        return(
                        <div key={news.id} className="row" onClick={()=>{navigate('/news/'+news.id)}}>
                        <div className="col-lg-12 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block  justify-content-center align-items-center" >
                                <p className="featured-block-text">{news.title}</p>
                                <p className="text-truncate">{news.content}</p>
                                <p className="featured-block-read " >Read more....</p>
                            </div>
                        </div>
                    </div>
                       )})}
                </div>
                
            </div>
                
            

        </>
    )
}
export default NewsList