import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EventsDetailed() {
  const {id} =useParams();
        const [event, setEvent] = useState(null);
   useEffect(()=>{fetch("https://raw.githubusercontent.com/MRG-Hub-creater/BackEnd-Temp/refs/heads/main/db.json")
            .then((data)=> data.json())
            .then((data)=>{
                const eventItem = data.event.find(item=>item.id==id);
               
                setEvent(eventItem);
             })
            .catch((err)=>console.log("Error,",err))},[id]); 
            return(
                <>
                
               <div className="container section-padding text-center">
                 {event&& <div className="row">
                        <div  key={event.id} className="col-lg-12 col-md-6 col-12 mb-4 mb-lg-0">
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
