import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AddBlog() {
  return (
   <>
    <Header/>
    <div className="form-container my-4">
    
    <div className="notebook">
        <h2>New Blog</h2>
      <form>
        <input className='form-control ' type="text" placeholder="Title" required/>
        <textarea className='form-control ' placeholder="Content" required></textarea>
        <input className='form-control ' type="file" />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  </div>
    <Footer/>
    </>
  )
}

export default AddBlog
