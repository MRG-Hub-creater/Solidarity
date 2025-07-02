import Footer from "./Footer"
import Header from "./Header"

function ContactUs(){
    
    return(
        <>
        
        <section className="contact-section section-padding " id="section_6">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-12 ms-auto mb-5 mb-lg-0">
                            <div className="contact-info-wrap">
                                <div className="mb-3">
                                     <h2 className="mb-3">Contact Infomation</h2>
                                </div>
                               <div className="mb-3" >
                                 <iframe className="mapImage"
                                        title="map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8830511051206!2d80.24730637574082!3d13.10659451190287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265bf24015ad3%3A0x45b7a705e9ec5826!2sIslamic%20Foundation%20Trust%20-%20IFT!5e0!3m2!1sen!2sin!4v1749640371149!5m2!1sen!2sin" 
                                        width="400" 
                                        height="400" 
                                        style={{border:0}} 
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                                </div>
                                <div className="contact-info">
                                   
                                    <p className="d-flex mb-2">
                                        <i className="bi-geo-alt me-2"></i>
                                         IFT Complex, #138, Perambur High Road, Chennai, Tamil Nadu 600012
                                    </p>

                                    <p className="d-flex mb-2">
                                        <i className="bi-telephone me-2"></i>
                                        
                                        <a href="tel:+91 9791522986 ">
                                            +91 9791522986
                                        </a>
                                    </p>

                                    <p className="d-flex">
                                        <i className="bi-envelope me-2"></i>

                                        <a href="mailto:info@company.com">
                                solidaritytamilnadu@gmail.com
                            </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-12 mx-auto">
                            <form className="custom-form contact-form" action="" method="post" role="form">
                                <h2>Contact form</h2>

                                <p >Or, you can just send an email:</p>
                                  <p >   <a href="mailto:info@company.com">
                                            solidaritytamilnadu@gmail.com
                                    </a>
                                </p>
                                <div className="row">
                                    <div className="col-lg-12  col-12">
                                        <input type="text" name="first-name" id="first-name" className="form-control" placeholder="Your Name" required/>
                                    </div>

                                    
                                </div>

                                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="mail@gmail.com" required/>

                                <textarea name="message" rows="5" className="form-control" id="message" placeholder="What can we help you?"></textarea>

                                <button  className="form-control">Send Message</button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
           
        </>
    )
}
export default ContactUs