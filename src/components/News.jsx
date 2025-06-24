

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'

function News(){
        const {id} =useParams();
        const [news, setNews] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:3000/news/'+id)
                    .then(response=> { 
                        return response.json()})
                        .then((data)=>{
                        setNews(data);
                        }).catch(err=>{
                        console.log(err);
                    });

                },[id] )
            return(
                <>
                <Header/>
               <div className="container ">
                     
                        
                    {news&& <div className="row">
                        <div className="col-lg-12 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className=" justify-content-center align-items-center" >
                                <p className="featured-block-text">{news.title}</p>
                                <p>{news.content}</p>
                                <img src={news.image} alt="Image" />
                            </div>
                        </div>
                        </div>
                    }
                </div>
                <Footer/>

           </>
            )
}
export default News;