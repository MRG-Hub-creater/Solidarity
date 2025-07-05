import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import API from '../axios';

function EventsDetailed() {
  const {id} =useParams();
        const [event, setEvent] = useState(null);
            useEffect(()=>{
              API.get(`/blog/${id}`).then((res)=>{
                setEvent(res.data);
             })
            .catch((err)=>console.log("Error,",err))},[id]); 


            return(
                <>
                <Header/>
               <div className="container section-padding text-center">
                 {event&& <div className="row">
                        <div  key={event._id} className="col-lg-12 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className=" " >
                                <div className="text-center m-10">
                                    <h3 className='my-5 newsTitle'  >{event.title}</h3>
                                </div>
                                <div >
                                     <img className="newsImage center" src={event.image} alt="Image" />
                                </div>
                                <div className=' my-5  newsContent  '>
                                    <p >{event.content}</p>
                               
                                </div>
                                
                            </div>
                        </div>
                        </div>
                }
                </div>
                

           </>
            )
}

export default EventsDetailed
