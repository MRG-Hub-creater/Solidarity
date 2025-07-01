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
                    <div key={state.id} >
                      <div className='district-card'>
                    
                      <div className="card-content"></div>
                    <div className='row'>
                      <div className="leader">
                          <h4 className='my-4'>President</h4>
                          <img className='districtImage'src={state.presidentImage} alt="President"/>
                          <div className="leader-name my-3">{state.presidentName}</div>
                        </div>
                        <div className="leader president-detail">
                          <ul className="custom-list mt-2">
                            <li className="custom-list-item d-flex"> <i className="bi-check custom-text-box-icon me-2"></i>B.E (MECHANICAL ENGINEERING), B.A (ISLAMIC STUDIES), M.B.A (INTERNATIONAL BUSINESS MANAGEMENT)</li>
                            <li className="custom-list-item d-flex"> <i className="bi-check custom-text-box-icon me-2"></i>ENGINEERING CONSULTANT & CAREER COUNSELLER</li>
                            <li className="custom-list-item d-flex"> <i className="bi-check custom-text-box-icon me-2"></i> MANAGING DIRECTOR, MRG ENGINEERING, SINCE 2021</li>
                            <li className="custom-list-item d-flex"> <i className="bi-check custom-text-box-icon me-2"></i>CO-PARTNER, JK TRADERS, SINCE 2023</li>
                            <li className="custom-list-item d-flex"> <i className="bi-check custom-text-box-icon me-2"></i>STATE PRESIDENT, SOLIDARITY YOUTH ORGANISATION – TAMILNADU (2025–2027)</li>
                            <li className="custom-list-item d-flex"> <i className="bi-check custom-text-box-icon me-2"></i>RUQN, JAMAAT E ISLAMI HIND, TAMILNADU SINCE 2024</li>
                            <li className="custom-list-item d-flex"> <i className="bi-check custom-text-box-icon me-2"></i>FOUNDER, AU YOUNG PROFESSIONALS CHARITABLE TRUST, SINCE 2015</li>
                            <li className="custom-list-item d-flex"> <i className="bi-check custom-text-box-icon me-2"></i>MEMBER, STUDENTS ISLAMIC ORGANISATION, 2015–2020</li>
                            <li className="custom-list-item d-flex"> <i className="bi-check custom-text-box-icon me-2"></i>PRESIDENT, SIO, CHENGALPATTU DISTRICT, 2019–2020</li>
                            
                            <li className="custom-list-item d-flex"> <i className="bi-check custom-text-box-icon me-2"></i>TUTOR, WORD-FOR-WORD QURAN TRANSLATION CLASSES, SINCE 2011</li>
                            <li className="custom-list-item d-flex"> <i className="bi-check custom-text-box-icon me-2"></i>DIRECTOR, INK CENTER (2015–2022) & PROFESSIONALS IAS ACADEMY (2017–2020)</li>
                          </ul>
                        </div>
                        
                        </div>
                        </div>
                        <div className='district-card'>
                         <div className='row'>
                          <div className="leader">
                          <h4 className='my-3'>Secretary</h4>
                          <img className='districtImage' src={secretaryImage} alt="Secretary"/>
                          <div className="leader-name my-3">{state.secretaryName}</div>
                        </div>
                        <div className="leader">
                          <h4 className='my-3'>Secretary</h4>
                          <img className='districtImage' src={state.secretaryImage2} alt="Secretary"/>
                          <div className="leader-name my-3">{state.secretaryName2}</div>
                        </div>
                        </div>
                       </div>
                        <div className='district-card'>
                         <div className='row'>
                          <div className="leader">
                          <h4 className='my-3'>Secretary</h4>
                          <img className='districtImage' src={secretaryImage} alt="Secretary"/>
                          <div className="leader-name my-3">{state.secretaryName}</div>
                        </div>
                        <div className="leader">
                          <h4 className='my-3'>Secretary</h4>
                          <img className='districtImage' src={state.secretaryImage2} alt="Secretary"/>
                          <div className="leader-name my-3">{state.secretaryName2}</div>
                        </div>
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
