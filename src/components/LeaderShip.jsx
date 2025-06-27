import React from 'react'
import Header from './Header'
import Footer from './Footer'
import DistrictImage from '../assets/Leadership/image92.jpg'
import { useState,useEffect } from 'react'
import AnonymousImage from '../assets/districtLeaders/AnonymousImage.jpg'
function LeaderShip() {
  const [stateList, setState]=useState([]);
useEffect(()=>{fetch("https://raw.githubusercontent.com/MRG-Hub-creater/BackEnd-Temp/refs/heads/main/db.json")
    .then((data)=> data.json())
    .then((data)=>{setState(data.state);
      console.log(districtList)
    })
    .catch(err=>console.log("Error,",err))},[])   
  
  return (
    <>
    <Header/>
    <div className='container-fluid my-4'>
        <div className='container'>
                <div className='image-container'>
                    <img className='district-bg' src={DistrictImage} alt="Image" />
                    <h1 className='overlay'>Our State Leaders</h1>
                </div>
            </div>
            {stateList&&stateList.map((state)=>{
                   let secretaryImage;
                   let secretaryImage2;
                 {
                  if(state.secretaryImage===""){
                     secretaryImage = AnonymousImage;
                  }
                  else{
                    secretaryImage=state.secretaryImage;
                  }
                 }
                  return(
                    <div key={state.id} className="district-card">
                      <div className="district-name">{state.stateName}   </div>
                      <div className="card-content"></div>
                    <div className='row'>
                      <div className="leader">
                          <h4>President</h4>
                          <img className='districtImage'src={state.presidentImage} alt="President"/>
                          <div className="leader-name">{state.presidentName}</div>
                        </div>
                        <div className="leader">
                          <h4>Secretary</h4>
                          <img className='districtImage' src={secretaryImage} alt="Secretary"/>
                          <div className="leader-name">{state.secretaryName}</div>
                        </div>
                        <div className="leader">
                          <h4>Secretary</h4>
                          <img className='districtImage' src={state.secretaryImage2} alt="Secretary"/>
                          <div className="leader-name">{state.secretaryName2}</div>
                        </div>
                        
                        </div>
                  </div>
                  )
            
                }
                
                
                
                )}
    </div>
    
    <Footer/>
    
    </>
  )
}

export default LeaderShip
