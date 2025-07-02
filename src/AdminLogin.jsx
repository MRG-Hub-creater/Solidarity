import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'


function AdminLogin({setIsOpen}) {
  const [email,setEmail]=useState("");
  const [password,setPassword] =useState("");
  const [isSignUp,setIsSignUp]=useState(false) 
   const [error,setError]=useState("")

 const handleOnSubmit=async(e)=>{
    e.preventDefault()
    let endpoint=(isSignUp) ? "signUp" : "login"
    await axios.post(`http://localhost:5000/admin/${endpoint}`,{email,password})
    .then((res)=>{
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("user",JSON.stringify(res.data.user))
        setIsOpen()
    })
    .catch(data=>setError(data.response?.data?.error))
  }



  return (
   <>
    
    <div className='login-body '>
    <div className="login-box mt-3">
    <i className="bi bi-person-fill-gear "></i>
    <h2>ADMIN LOGIN</h2>
    <form className='form' onSubmit={handleOnSubmit}>
      <div className='form-control'>
                <label>Email</label>
                <input type="email" className='input' onChange={(e)=>setEmail(e.target.value)} required></input>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type="password" className='input' onChange={(e)=>setPassword(e.target.value)} required></input>
            </div>
             <button type='submit'>{(isSignUp) ? "Sign Up": "Login"}</button><br></br>
          { (error!="") && <h6 className='error'>{error}</h6>}<br></br>
            <p onClick={()=>setIsSignUp(pre=>!pre)}>{(isSignUp) ? "Already have an account": "Create new account"}</p>
      
    </form>
  </div>
</div>
    
   </>
  )
}

export default AdminLogin
