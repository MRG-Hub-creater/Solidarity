import React from 'react'
import { useState,useEffect, use } from "react"
import { Link, useNavigate } from "react-router-dom";

function UpcomingEvents() {
 const [eventList, setEvent] = useState(null);
    const navigate = useNavigate();

        useEffect(()=>{fetch("https://raw.githubusercontent.com/MRG-Hub-creater/BackEnd-Temp/refs/heads/main/db.json")
            .then((data)=> data.json())
            .then((data)=>{setEvent(data.event);
            })
            .catch(err=>console.log("Error,",err))},[])   

    return(
        <>
        
               
            <div className="container section-padding">
            <div className="row">
                <div className="col-lg-12 col-12 mb-5">
                         <h2 className="newsTitle">Events</h2>
                </div>
            </div>
                <div className="newsContainer">
                     {eventList&& eventList.map(event=>{
                        let eventImage;
                                                {if(event.image===""){
                                                    eventImage=newsImg;
                                                }
                                                else{
                                                    eventImage=event.image;
                                                }
                        return(
                        <div key={event.id} className="row" onClick={()=>{navigate('/event/'+event.id)}}>
                         <div >
                            
                                <div className="newsCard featured-block my-3">
                                <img src={event.image} alt="card-img"/>
                                <div className="content">
                                    
                                    <h3>{event.title}</h3>
                                    <p className="text-truncate">{event.content}</p>
                                    <Link className="featured-block-read " >Read more....</Link>
                                    <div className="meta">
                                    
                                    <span className="date">{event.date}</span>
                                    </div>
                                </div>
                              
                                
                            </div>   
                </div>
                    </div>
                       )}})}
                </div>
                
            </div>
                
            

        </>
    )
}

export default UpcomingEvents
