import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import DistrictImage from '../assets/Leadership/image92.jpg'
import AnonymousImage from '../assets/districtLeaders/AnonymousImage.jpg'
function DistrictLeadership() {

  const [districtList, setDistrict]=useState([]);
  useEffect(()=>{fetch("https://raw.githubusercontent.com/MRG-Hub-creater/BackEnd-Temp/refs/heads/main/db.json")
    .then((data)=> data.json())
    .then((data)=>{setDistrict(data.district);
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
            <h1 className='overlay'>Our Distict Leaders</h1>
        </div>
    </div>
    {districtList&&districtList.map((district)=>{
       let secretaryImage;
       let presidentImage;
       let presidentName;
       let secretaryName;
       let secretaryName2;
       let secretaryName3;
       let secretaryImage2;
       let secretaryImage3;

     {
      if(district.secretaryImage===""){
         secretaryImage = AnonymousImage;
      }
      else{
        secretaryImage=district.secretaryImage;
      }
      if(district.secretaryName===""){
         secretaryName = "Not yet decided";
      }
      else{
        secretaryName=district.secretaryName;
      }
      if(district.presidentImage===""){
         presidentImage = AnonymousImage;
      }
      else{
        presidentImage=district.presidentImage;
      }
      if(district.presidentName===""){
         presidentName = "Not yet decided";
      }
      else{
        presidentName=district.presidentName;
      }
      if(district.secretaryImage2===""){
         secretaryImage2 = AnonymousImage;
      }
      else{
        secretaryImage2=district.secretaryImage2;
      }
      if(district.secretaryName2===""){
         secretaryName2 = "Not yet decided";
      }
      else{
        secretaryName2=district.secretaryName2;
      }
      if(district.secretaryImage3===""){
         secretaryImage3 = AnonymousImage;
      }
      else{
        secretaryImage3=district.secretaryImage3;
      }
      if(district.secretaryName3===""){
         secretaryName3 = "Not yet decided";
      }
      else{
        secretaryName3=district.secretaryName3;
      }
     }
      return(
        
                              <div key={district.id} className="district-card">
                                <div className="district-name">{district.districtName}   </div>
                                <div className="card-content"></div>
                              <div className='row my-3'>
                                <div className="leader">
                                    <h4>President</h4>
                                    <img className='districtImage'src={presidentImage} alt="President"/>
                                    <div className="leader-name">{presidentName}</div>
                                  </div>
                                  <div className="leader">
                                    <h4>Secretary</h4>
                                    <img className='districtImage' src={secretaryImage} alt="Secretary"/>
                                    <div className="leader-name">{secretaryName}</div>
                                  </div>
                                  </div>
                                  <div className='row my-3'>
                                    <div className="leader">
                                    <h4>Joint Secretary</h4>
                                    <img className='districtImage' src={secretaryImage2} alt="Secretary"/>
                                    <div className="leader-name">{secretaryName2}</div>
                                  </div>
                                  <div className="leader">
                                    <h4>Joint Secretary</h4>
                                    <img className='districtImage' src={secretaryImage3} alt="Secretary"/>
                                    <div className="leader-name">{secretaryName3}</div>
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
  
 
export default DistrictLeadership
