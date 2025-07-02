
import Footer from '../components/Footer'
import Header from '../components/Header'
import DistrictLeadership from '../components/DistrictLeadership'
import DistrictImage from '../assets/Leadership/image92.jpg'
import AnonymousImage from '../assets/districtLeaders/AnonymousImage.jpg'
import  { useEffect, useState } from 'react'

function AddLeadership() {
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
    <div className="form-container my-4">
    
    <div className="leaderBook">
        <h2>New District Leaders</h2>
      <form>
         
        <input className='form-control ' type="text" placeholder="District name" required/>
       
        <input className='form-control ' type="text" placeholder="President Name" required/>
        <div className='row'>
            <div className='col-4'>
                <label  className="mt-3 leadersImageText " htmlFor="">President Image</label>
            </div>
            
              <div className='col-8'>
                <input className='form-control ' type="file" />
              </div>
            
        </div>
        
       
        <input className='form-control ' type="text" placeholder="Secretary Name" />
        <div className='row'>
            <div className='col-4'>
                <label  className="mt-3 leadersImageText" htmlFor="">Secretary Image</label>
            </div>
            
              <div className='col-8'>
                <input className='form-control ' type="file" />
              </div>
            
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  </div>
  <div className='container'>
     <div className='container-fluid my-4'>
        
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
                <div className="modify">
                 <button type="button" className='btn btn-primary btn-sm'><i className="bi bi-pencil-square mx-2"></i>Edit</button>
                 <button type="button" className='btn btn-danger mt-4 btn-sm'><i className="bi bi-trash3 mx-2"></i>Delete</button>
                </div>
                </div>
          </div>
          )
    
        }
        
        
        
        )}
        </div>
        
  </div>
    <Footer/>
    </>
  )
}

export default AddLeadership
