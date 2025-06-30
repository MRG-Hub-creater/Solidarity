import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DistrictImage from '../assets/Leadership/image92.jpg'

function JoinMember() {
  return (
    <>
    <Header/>
     <div className='container-fluid my-4 '>
                                        <div className='container'>
                                            <div className='image-container'>
                                                <img className='district-bg' src={DistrictImage} alt="Image" />
                                                <h1 className='overlay'>Join Us</h1>
                                    
                                            </div>
                                        </div>
                                    
                                       </div>
      <div className='container '>
    
        <div className='container'>
                   Solidarity Tamil Nadu is a youth-driven organization committed to justice, social upliftment, and Islamic values. We aim to build morally grounded, socially aware, and empowered individuals who can lead positive change in society.
Our activities include employment training, de-addiction support, Mahalla-based community work, and ideological education through programs like Payilarangam and Jummah bayan support. We organize major events such as state and district-level conferences, youth expos, and anti-drug campaigns.
With strong digital outreach, daily social media presence, and regular content on health, politics, and Islamic teachings, we ensure our message reaches far and wide. By combining faith, activism, and education, we strive to create a just and vibrant society led by confident youth. 
                </div>
                </div>
                <section className="cta-section section-padding section-bg">
                   

                <div className="container">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-lg-5 col-12 ms-auto">
                            <h2 className="mb-0">Make an impact. <br/> Change society.</h2>
                        </div>

                        <div className="col-lg-5 col-12">

                            <a href="https://forms.gle/wbpCfAWCbURdwHiX6" target='_blank' rel='noopener noreferrer' className="custom-btn btn smoothscroll join">Become a Member</a>
                        </div>

                    </div>
                </div>
               
            </section>
            
    <Footer/>
    </>
  )
}

export default JoinMember
