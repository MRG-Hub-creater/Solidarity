import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NewsList from '../components/NewsList'
import newsImg from '/logo.png'
import { useNavigate, Link } from 'react-router-dom';

function AddNews() {
  const [newsList, setNews] = useState(null);
    const navigate = useNavigate();

        useEffect(()=>{fetch("https://raw.githubusercontent.com/MRG-Hub-creater/BackEnd-Temp/refs/heads/main/db.json")
            .then((data)=> data.json())
            .then((data)=>{setNews(data.news);
              console.log(newsList)
            })
            .catch(err=>console.log("Error,",err))},[])   
  return (
    <>
    <Header/>
   
    <div className="form-container my-4">
    
    <div className="newsBook">
        <h2>Add News</h2>
      <form>
        <input className='form-control ' type="text" placeholder="Title" required/>
        <textarea className='form-control ' placeholder="Content" required></textarea>
        <input type="file" className='form-control '  />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  </div>
       
            <div className="container section-padding">
           <div className="newsContainer">
                     {newsList&& newsList.map(news=>{
                       let newsImage;
                                              {if(news.image===""){
                                                  newsImage=newsImg;
                                              }
                                              else{
                                                  newsImage=news.image;
                                              }
                        return(
                        <div key={news.id} className="row" >
                         <div >
                            
                                <div className="newsCard featured-block my-3">
                                <img src={newsImage} alt="card-img"/>
                                <div className="content">
                                    
                                    <h3>{news.title}</h3>
                                    <p className="text-truncate">{news.content}</p>
                                    <Link className="featured-block-read " onClick={()=>{navigate('/news/'+news.id)}}>Read more....</Link>
                                    <div className="meta">
                                    
                                    <span className="date">{news.date}</span>
                                    </div>
                                </div>
                              
                                <div className="modify">
                                  <button type="button" className='btn btn-primary btn-sm' onClick={()=>alert("Edited")}><i className="bi bi-pencil-square mx-2" ></i>Edit</button>
                                  <button type="button" className='btn btn-danger mt-4 btn-sm' onClick={()=>alert("Deleted")}><i className="bi bi-trash3 mx-2"></i>Delete</button>
                                 </div>
                            </div>   
                </div>
                    </div>
                       )}})}
                </div>
                
            </div>
    
    <Footer/>
    </>
  )
}

export default AddNews
