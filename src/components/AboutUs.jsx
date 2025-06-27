import AboutImage from '../assets/AboutUs.jpg'

import HistoryImage from '../assets/History.png'

import { Link } from 'react-router-dom'

function AboutUs(){
    return(
        <>
            

           


            <section className="section-padding section-bg" id="section_2">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                            <img src={AboutImage} className="custom-text-box-image img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="custom-text-box">
                                <h2 className="mb-2">About Us</h2>

                                <p className="mb-0">We are a youth-centered organization committed to nurturing a generation grounded in the values of Islam. Guided by the Qur’an, Hadith, and the life of Prophet Muhammad (peace be upon him), we aim to develop young individuals who are energetic, virtuous, and committed to enjoining good and forbidding wrong.</p>
                                <Link className="custom-btn custom-border-btn btn mt-3" to={'/aboutUsDetailed'} >Know more....</Link>
                            </div>
                            
                            <div className="row">
                                <div className="col-lg-12 col-md-6 col-12">
                                    <div className="custom-text-box mb-lg-0">
                                        <h5 className="mb-3">Our Mission</h5>

                                        

                                        <ul className="custom-list mt-2">
                                            <li className="custom-list-item d-flex">
                                                <i className="bi-check custom-text-box-icon me-2"></i>
                                                Guide youth to live by the Qur'an and Hadith with purpose and righteousness.
                                            </li>

                                            <li className="custom-list-item d-flex">
                                                <i className="bi-check custom-text-box-icon me-2"></i>
                                               Inspire emulation of the Prophet Muhammad’s ﷺ character in daily life.
                                            </li>
                                            <li className="custom-list-item d-flex">
                                                <i className="bi-check custom-text-box-icon me-2"></i>
                                               Nurture talents and channel youth energy for constructive social change.
                                            </li>
                                            <li className="custom-list-item d-flex">
                                                <i className="bi-check custom-text-box-icon me-2"></i>
                                               Promote justice by enjoining good and forbidding wrong peacefully.

                                            </li>
                                            <li className="custom-list-item d-flex">
                                                <i className="bi-check custom-text-box-icon me-2"></i>
                                               Operate with strong adherence to Islamic morals and ethical principles.

                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="about-section section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-5 col-12">
                            <img src={HistoryImage} className="about-image ms-lg-auto bg-light shadow-lg img-fluid " alt=""/>
                        </div>

                        <div className="col-lg-5 col-md-7 col-12">
                            <div className="custom-text-block">
                                <h2 className="mb-3">History</h2>

                                

                                <p>We’re still working on adding our history here.</p>

                                <p>Please check back soon!</p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="cta-section section-padding section-bg">
                <div className="container">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-lg-5 col-12 ms-auto">
                            <h2 className="mb-0">Make an impact. <br/> Change society.</h2>
                        </div>

                        <div className="col-lg-5 col-12">

                            <a href="https://forms.gle/wbpCfAWCbURdwHiX6" className="custom-btn btn smoothscroll">Become a Member</a>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
export default AboutUs