

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import API from '../axios';


function News(){
        const {id} =useParams();
        const [news, setNews] = useState(null);
   useEffect(()=>{
              API.get(`/news/${id}`).then((res)=>{
                setNews(res.data);
             })
            .catch((err)=>console.log("Error,",err))},[id]); 
            return(
                <>
                <Header/>
               <div className="container section-padding text-center">
                 {news&& <div className="row">
                    
                        <div  key={news._id} className="col-lg-12 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className=" " >
                                <div className="text-center m-10">
                                    <h3 className='my-5 newsTitle'  >{news.title}</h3>
                                </div>

                                {news.image&&<div >
                                     <img className="newsImage center" src={news.image} alt="Image" />
                                </div>}
                                <div className=' my-5  newsContent  '>
                                    <p >{news.content}</p>
                               
                                </div>
                                
                            </div>
                        </div>
                        </div>
                }
                </div>
                

           </>
            )
}
export default News;