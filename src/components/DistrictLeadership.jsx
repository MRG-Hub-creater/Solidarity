import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import DistrictImage from '../assets/Leadership/image92.jpg'
function DistrictLeadership() {

  const [districtList, setDistrict]=useState([]);
  useEffect(()=>{fetch("http://localhost:3000/district")
    .then((data)=> data.json())
    .then((data)=>{setDistrict(data);
      console.log(districtList)
    })
    .catch(err=>console.log("Error,",err))},[])
  

  return (
    <>
     <Header/>
      <div className='container-fluid section-padding'>
    <div className='container'>
        <div className='image-container'>
            <img className='district-bg' src={DistrictImage} alt="Image" />
            <h1 className='overlay'>Our Distict Leaders</h1>
        </div>
    </div>
    {districtList&&districtList.map((district)=>{
      return(
        <div key={district.id} className="district-card">
          <div className="district-name">{district.districtName}   </div>
          <div className="card-content"></div>
        <div className='row'>
          <div className="leader">
              <h4>President</h4>
              <img className='districtImage'src={DistrictImage} alt="President"/>
              <div className="leader-name">{district.presidentName}</div>
            </div>
            <div className="leader">
              <h4>Secretary</h4>
              <img className='districtImage' src={DistrictImage} alt="Secretary"/>
              <div className="leader-name">{district.secretaryName}</div>
            </div>
            <div className="address">
              <h4>Office Address</h4>
              <p>
                {district.Address}<br/>
                Phone: {district.PhoneNo}
              </p>
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
