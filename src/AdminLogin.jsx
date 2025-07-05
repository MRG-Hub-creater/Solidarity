import React, { useState } from 'react'
import API from './axios';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';



function AdminLogin() {
  const [email,setEmail]=useState("");
  const [password,setPassword] =useState("");
  const [isSignUp,setIsSignUp]=useState(false) 
   const [error,setError]=useState("")
   const navigate = useNavigate();

 const handleOnSubmit=async(e)=>{
    e.preventDefault();
    let endpoint=(isSignUp) ? "signUp" : "login"
    try{
    await API.post(`/admin/${endpoint}`,{email,password})
    
        localStorage.setItem("isAdmin","true");
        navigate('/');
    
  }
    catch(data){
      setError(data.response?.data?.error);
  }


 }
  return (
   <>
    <Header/>
    <div className='login-body '>
    <div className="login-box mt-3">
    <i className="bi bi-person-fill-gear "></i>
    <h2>ADMIN LOGIN</h2>
    <form className='form' onSubmit={handleOnSubmit}>
      <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type="email" className='input' onChange={(e)=>setEmail(e.target.value)} required></input>
            </div>
            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input type="password" className='input' onChange={(e)=>setPassword(e.target.value)} required></input>
            </div>
             <button type='submit'>{(isSignUp) ? "Sign Up": "Login"}</button><br></br>
          { (error!="") && <h6 className='error my-3'>{error}</h6>}<br></br>
            <p onClick={()=>setIsSignUp(pre=>!pre)}>{(isSignUp) ? "Already have an account": "Create new account"}</p>
      
    </form>
  </div>
</div>
    
   </>
  )

}
export default AdminLogin
