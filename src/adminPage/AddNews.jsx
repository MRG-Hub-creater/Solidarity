import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import newsImg from '/logo.png'
import { useNavigate, Link } from 'react-router-dom';
import API from '../axios'

function AddNews() {
     const [newsList, setNews] = useState([]);
     const [title, setTitle] =useState("");
     const [content,setContent]=useState("");
     const [file, setFile]=useState(null);
     const [date, setDate]=useState("");
     const [error, setError]=useState("");
     const [loading, setLoading]=useState(false);
 
    const navigate = useNavigate();

        useEffect(()=>{
              API.get("/news").then(res=>setNews(res.data));
            },[]) 

     const handleSubmit=async(e)=>{
      e.preventDefault();
      if(loading){
        return
      }
      setLoading(true);
      setError("");

      if(!title || !content || !date){
        return setError("Fields are required");
      }

      const formData = new FormData();
      formData.append('title',title);
      formData.append('content',content);
      if(file){
      formData.append('file',file);
      }
      formData.append('date',date);

      try{
        await API.post('/news',formData);
        navigate(0);
      }catch(err){
        setError(err.response?.data?.message||'Upload failed')

      }finally{
        setLoading(false);
      }
    };

    ////for delete
      const handleDelete = async(id)=>{
        const confirmDelete = window.confirm("Are you sure you want to delete this event?");
        if(!confirmDelete){
          return;
        }
        try{
          await API.delete(`/news/${id}`);
          alert("News deleted successfully");
          navigate(0);
        }catch(err){
          alert("Failed to delete event")
        }
      }

  return (
    <>
    <Header/>
   
    <div className="form-container my-4">
    
    <div className="newsBook">
        <h2>Add News</h2>
        {error&& <p style={{color:'red'}}>{error}</p>}
      <form onSubmit={handleSubmit} encType ='multipart/form-data'>
        <input className='form-control ' type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
        <textarea className='form-control ' placeholder="Content" value={content} onChange={(e)=>setContent(e.target.value)} required></textarea>
        <input type="file" className='form-control '  onChange={(e)=>setFile(e.target.files[0])}  />
        <input type='date' value={date} onChange={(e)=>setDate(e.target.value)} required/>
        <button type="submit" disabled={loading} className="submit-btn">{loading? "Uploading":"Submit"}</button>
      </form>
    </div>
  </div>
       
            <div className="container section-padding">
           <div className="newsContainer">
                     {newsList&& newsList.map(news=>{
                       const newsImage = news.image ? news.image:newsImg;
                       
                       return(
                        <div key={news._id} className="row" >
                         <div >
                            
                                <div className="newsCard featured-block my-3">
                                <img src={newsImage} alt="card-img"/>
                                <div className="content">
                                    
                                    <h3>{news.title}</h3>
                                    <p className="text-truncate">{news.content}</p>
                                    <Link className="featured-block-read " onClick={()=>{navigate('/news/'+news._id)}}>Read more....</Link>
                                    <div className="meta">
                                    
                                    <span className="date">{new Date(news.date).toLocaleDateString('en-IN',{
                                      day:"numeric",
                                      month:"long",
                                      year:"2-digit"
                                    })}</span>
                                    </div>
                                </div>
                              
                                <div className="modify">
                                  <button type="button" className='btn btn-primary btn-sm' onClick={()=>navigate('/editNews/'+news._id)}><i className="bi bi-pencil-square mx-2" ></i>Edit</button>
                                  <button type="button" className='btn btn-danger mt-4 btn-sm' onClick={()=>handleDelete(news._id)}><i className="bi bi-trash3 mx-2"></i>Delete</button>
                                 </div>
                            </div>   
                </div>
                    </div>
                       )})}
                </div>
                
            </div>
    
   
    </>
  )
}

export default AddNews
