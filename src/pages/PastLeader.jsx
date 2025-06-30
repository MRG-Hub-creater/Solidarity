import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DistrictImage from '../assets/Leadership/image92.jpg'
import AnonymousImage from '../assets/districtLeaders/AnonymousImage.jpg'


function PastLeader() {

     const [pastLeaders, setPastLeaders]=useState([]);
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/MRG-Hub-creater/BackEnd-Temp/refs/heads/main/db.json").then((data)=>data.json()).then((data)=>setPastLeaders(data.pastLeaders)).catch(err=>console.log("Error, ",err))}
        ,[])
  return (
   <>
   <Header/>
   <div className='container-fluid my-4'>
       <div className='container'>
           <div className='image-container'>
               <img className='district-bg' src={DistrictImage} alt="Image" />
               <h1 className='overlay'>Our Past Leaders</h1>
           </div>
       </div>
       {pastLeaders&&pastLeaders.map((pastLeader)=>{
          let secretaryImage;
          let secretaryName;
          let presidentImage;
          let presidentName;
        {
         if(pastLeader.secretaryImage===""){
            secretaryImage = AnonymousImage;
         }
         else{
           secretaryImage=pastLeader.secretaryImage;
         }
         if(pastLeader.presidentImage===""){
            presidentImage= AnonymousImage;
         }
         else{
            presidentImage=pastLeader.presidentImage;
         }
        
         }
        
         return(
           <div key={pastLeader.id} className="district-card">
             <div className="district-name">{pastLeader.servicePeriod}   </div>
             <div className="card-content"></div>
           <div className='row'>
             <div className="leader">
                 <h4>President</h4>
                 <img className='districtImage'src={presidentImage} alt="President"/>
                 <div className="leader-name">{pastLeader.presidentName}</div>
               </div>
               <div className="leader">
                 <h4>Secretary</h4>
                 <img className='districtImage' src={secretaryImage} alt="Secretary"/>
                 <div className="leader-name">{pastLeader.secretaryName}</div>
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

export default PastLeader
