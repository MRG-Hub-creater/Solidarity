import { useEffect, useState } from 'react'
import logo from '../assets/FlagLogo.jpg'
import textLogo from '../assets/SolidarityTextLogo.png'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import API from '../axios';

function Header(){
    const [isAdmin,setIsAdmin]=useState(false);
    const navigate = useNavigate();
    
    useEffect(()=>{
        API.get("/admin/check").then(res=>setIsAdmin(res.data.isAdmin));
    },[]);

    const logout =async()=>{
        await API.post('/admin/logout');
        localStorage.removeItem('isAdmin');
        setIsAdmin(false);
        navigate("/");
    }
    return(
        <>
        <header className="site-header ">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-8 col-12 d-flex flex-wrap">
                        <p className="d-flex me-4 mb-0">
                        <a  href='https://www.google.com/maps/place/Islamic+Foundation+Trust+-+IFT/@13.106589,80.249881,16z/data=!4m6!3m5!1s0x3a5265bf24015ad3:0x45b7a705e9ec5826!8m2!3d13.1065893!4d80.2498813!16s%2Fg%2F11b5pjs52s?hl=en&entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D' target="_blank">
                            <i className="bi-geo-alt me-2"></i>
                           IFT Complex, #138, Perambur High Road, Chennai, TamilNadu 600012
                        </a>
                        </p>

                        <p className="d-flex mb-0">
                            <i className="bi-envelope me-2"></i>

                            <a href="mailto:info@company.com">
                                solidaritytamilnadu@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
                        <ul className="social-icon">

                            <li className="social-icon-item">
                                <a href="https://www.facebook.com/SolidarityTamilnadu/" className="social-icon-link bi-facebook"></a>
                            </li>

                            <li className="social-icon-item">
                                <a href="https://www.instagram.com/solidarityTamilnadu/?hl=en" className="social-icon-link bi-instagram"></a>
                            </li>

                            <li className="social-icon-item">
                                <a href="https://youtube.com/@solidaritytamilnadu3897?si=AGGKqbaKE2Mzw84J" className="social-icon-link bi-youtube"></a>
                            </li>

                          
                        </ul>
                    </div>

                </div>
            </div>
        </header>
        <nav className="navbar navbar-expand-lg bg-light shadow-lg sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand ms-2" to="/">
                    <img src={logo} className="logo img-fluid" alt="Solidarity Youth Organization TN"/>
                    <img src={textLogo} className="textLogo img-fluid" alt="Solidarity Youth Organization TN"/>
                   
                </Link>

                <button className="navbar-toggler mr-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link click-scroll" to={'/'}>Home</Link>
                        </li>

                        <li className="nav-item">
                              <Link className="nav-link click-scroll" to={'/aboutUsDetailed'} >About us</Link>
                        </li> 

                         <li className="nav-item dropdown">
                            <Link className="nav-link click-scroll dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Activities</Link>

                            <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                <li><Link className="dropdown-item" to={'/activity'}>What We Do</Link></li>
                                <li><Link className="dropdown-item" to={'/eventList'}>Upcoming Events</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link click-scroll" to={'/newsList'}>News</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link click-scroll dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">LeaderShips</Link>

                            <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                <li><Link className="dropdown-item" to={'/state'}>State Leaders</Link></li>
                                <li><Link className="dropdown-item" to={'/district'}>District Leaders</Link></li>
                                <li><Link className="dropdown-item" to={'/pastLeaders'}>Our Past Leaders</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link to="/contact" className="nav-link click-scroll">Contact Us</Link>
                        </li>

                               {isAdmin&&<li className="nav-item dropdown">
                           <Link className="nav-link click-scroll dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Admin Panel</Link>

                            <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                              <li>  <Link className="dropdown-item" to={'/addEvents'}>Add Upcoming Events</Link></li>
                                <li><Link className="dropdown-item" to={'/addNews'}>Add News</Link></li>
                           {/***    <li><Link className="dropdown-item" to={'/addLeadership'}>Add Leadership</Link></li>  */} 
                                <li ><Link className="dropdown-item" onClick={logout}>Logout</Link></li>
                            </ul>
                        </li>
                      
                        
                        
                     }
                        <li className="nav-item me-4 ">
                            <Link to="/joinMember" className="nav-link custom-btn custom-border-btn btn">Join</Link>
                        </li> 

                 
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Header