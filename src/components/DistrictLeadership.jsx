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
     {
      if(district.secretaryImage===""){
         secretaryImage = AnonymousImage;
      }
      else{
        secretaryImage=district.secretaryImage;
      }
     }
      return(
        <div key={district.id} className="district-card">
          <div className="district-name">{district.districtName}   </div>
          <div className="card-content"></div>
        <div className='row'>
          <div className="leader">
              <h4>President</h4>
              <img className='districtImage'src={district.presidentImage} alt="President"/>
              <div className="leader-name">{district.presidentName}</div>
            </div>
            <div className="leader">
              <h4>Secretary</h4>
              <img className='districtImage' src={secretaryImage} alt="Secretary"/>
              <div className="leader-name">{district.secretaryName}</div>
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
