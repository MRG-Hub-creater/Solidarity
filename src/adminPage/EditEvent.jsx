import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useNavigate, useParams } from 'react-router-dom';
import API from '../axios';

function EditEvent() {
        const [event , setEvent] = useState("");
      const [title, setTitle] =useState("");
        const [content,setContent]=useState("");
        const [file, setFile]=useState(null);
        const [date, setDate]=useState("");
        const [error, setError]=useState("");
        const [loading, setLoading]=useState(false);
        const {id} =useParams();
        const navigate = useNavigate();

        useEffect(()=>{
            API.get(`/blog/${id}`).then(res=>{
                setEvent(res.data)
                setTitle(res.data.title);
                setContent(res.data.content);
                setDate(res.data.date?.substring(0,10));
            }
            );
        },[id]);

        const handleSubmit= async(e)=>{
            e.preventDefault();
             if(loading){
                return
            }
            setLoading(true);
            setError("");
            const formData = new FormData();
           formData.append('title',title);
            formData.append('content',content);
            formData.append('date',date);
            if(file){
                 formData.append('file',file);
            }
        try{
            await API.put('/blog/'+id,formData);
            navigate('/addEvents');
      }catch(err){
        setError(err.response?.data?.message||'Upload failed')

      }finally{
        setLoading(false);
      }
    }
    
  return (
    <>
    <Header/>
    <div className='row'>

         


        <div className='col-lg-8 '>
             <div className="container section-padding text-center">
                 {event&& <div className="row">
                    
                        <div  key={event._id} className="col-lg-12 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className=" " >
                                <div className="text-center m-10">
                                    <h3 className='my-5 newsTitle'  >{title}</h3>
                                </div>

                                {event.image&&<div >
                                     <img className="newsImage center" src={event.image} alt="Image" />
                                </div>}
                                <div className=' my-5  newsContent  '>
                                    <p >{content}</p>
                               
                                </div>
                                
                            </div>
                        </div>
                        </div>
                }
                </div>
                

        </div>
         <div className='col-lg-4  '>
                        <div className="form-container ">
                
                <div className="notebook">
                    <h2>Edit Events</h2>
                    {error&& <p style={{color:'red'}}>{error}</p>}
                <form onSubmit={handleSubmit}  encType='multipart/form-data'>
                    <input className='form-control ' type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                    <textarea className='form-control ' placeholder="Content" value={content} onChange={(e)=>setContent(e.target.value)} required></textarea>
                    <input className='form-control ' type="file"  onChange={(e)=>setFile(e.target.files[0])} />
                    <input type='date' value={date} onChange={(e)=>setDate(e.target.value)} required/>
                    <button type="submit" disabled={loading} className="submit-btn">{loading? "Uploading":"Submit"}</button>
                </form>
                </div>
            </div>

        </div>
      
     
</div>
  
    </>
  )
}

export default EditEvent