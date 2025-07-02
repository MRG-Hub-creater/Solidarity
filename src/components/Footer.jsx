import FooterLogo from '../assets/Solidarity Logo.jpeg'
import { Link } from 'react-router-dom'
function Footer(){
    const arrow={
        color:'#5bc1ac',
        fontSize:'60px',
        marginLeft:'40px'
    }
    return(
        <>
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-12 mb-4">
                        <img src={FooterLogo} className="Blogo img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <h5 className="site-footer-title mb-3">Quick Links</h5>

                        <ul className="footer-menu">
                            <li className="footer-menu-item"><Link className="footer-menu-link" to={'/'}>Home</Link></li>

                            <li className="footer-menu-item"><Link className="footer-menu-link" to={'/aboutUsDetailed'}>About Us</Link></li>

                            <li className="footer-menu-item"><Link className="footer-menu-link" to={'/activity'}>Activities</Link></li>

                            <li className="footer-menu-item"><Link className="footer-menu-link" to={'/blogList'}>News</Link></li>

                            <li className="footer-menu-item"><a href="https://forms.gle/wbpCfAWCbURdwHiX6" target='_blank' rel='noopener noreferrer' className="footer-menu-link">Become a Member</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mx-auto">
                        <h5 className="site-footer-title mb-3">Contact Infomation</h5>

                        <p className="text-white d-flex mb-2">
                            <i className="bi-telephone me-2"></i>

                            <a href="tel:+91 9791522986 " className="site-footer-link">
                               +91 9791522986
                            </a>
                        </p>

                        <p className="text-white d-flex">
                            <i className="bi-envelope me-2"></i>

                            <a href="mailto:solidaritytamilnadu@gmail.com" className="site-footer-link">
                                solidaritytamilnadu@gmail.com
                            </a>
                        </p>

                        <p className="text-white d-flex mt-3">
                            <a className=" site-footer-link" href='https://www.google.com/maps/place/Islamic+Foundation+Trust+-+IFT/@13.106589,80.249881,16z/data=!4m6!3m5!1s0x3a5265bf24015ad3:0x45b7a705e9ec5826!8m2!3d13.1065893!4d80.2498813!16s%2Fg%2F11b5pjs52s?hl=en&entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D' target="_blank">
                            <i className="bi-geo-alt me-2"></i>
                            IFT Complex, #138, Perambur High Road, Chennai, Tamil Nadu 600012
                            </a>
                        </p>
                </div>
              <div className="col-lg-1 col-md-4 mt-5  ">
                 <a href="#" className=" bi bi-arrow-up-circle-fill   " style={arrow}></a>

                    </div> 
                </div>
</div>
            <div className="site-footer-bottom">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-7 col-12">
                            <p className="copyright-text mb-0">Copyright © 2025 <a href="https://mrgengg.com">MRG Engineering.</a> All rights reserved.</p>
                        </div>
                        
                        <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                            <ul className="social-icon">
                                <li className="social-icon-item">
                                    <a href="https://www.facebook.com/SolidarityTamilnadu/" className="social-icon-link bi-facebook"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="https://www.instagram.com/solidarityTamilnadu/" className="social-icon-link bi-instagram"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="https://youtube.com/@solidaritytamilnadu3897?si=AGGKqbaKE2Mzw84J" className="social-icon-link bi-youtube"></a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer