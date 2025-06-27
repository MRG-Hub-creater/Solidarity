import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AddNews() {
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
    
    <Footer/>
    </>
  )
}

export default AddNews
