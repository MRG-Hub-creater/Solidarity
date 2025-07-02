

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import axios from "axios"

function News(){
        const {id} =useParams();
        const [news, setNews] = useState(null);
   useEffect(()=>{fetch("https://raw.githubusercontent.com/MRG-Hub-creater/BackEnd-Temp/refs/heads/main/db.json")
            .then((data)=> data.json())
            .then((data)=>{
                const newsItem = data.news.find(item=>item.id==id);
               
                setNews(newsItem);
             })
            .catch((err)=>console.log("Error,",err))},[id]); 
            return(
                <>
                
               <div className="container ">
                     
                        
                    {news&& <div className="row">
                        <div  key={news.id} className="col-lg-12 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className=" justify-content-center align-items-center" >
                                <p className="featured-block-text">{news.title}</p>
                                <p>{news.content}</p>
                                <img className="newsImage" src={news.image} alt="Image" />
                            </div>
                        </div>
                        </div>
                    }
                </div>
                

           </>
            )
}
export default News;