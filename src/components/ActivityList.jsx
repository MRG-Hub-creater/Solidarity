import React from 'react'
import JusticeIcon from '../assets/Activities/JusticeIcon.png'
import Harmony from '../assets/Activities/harmony.png'
import Seminar from '../assets/Activities/youth awareness seminars.png'
import Inspiring from '../assets/Activities/inspiring kids.png'
import Invite from '../assets/Activities/Inviting to islam.png'
import Camp from '../assets/Activities/eye health.png'
import Sports from '../assets/Activities/sports.png'
import Quiz from '../assets/Activities/quran quiz.png'
import Blood from '../assets/Activities/blood.png'
import Quran from '../assets/Activities/quran disc.png'
import Scholarship from '../assets/Activities/schoolarship.png'
function ActivityList() {
  return (
     <section className="section-padding">
                <div className="container">
                    <div className="row"> 

                        <div className="col-lg-10 col-12 text-center mx-auto">
                            <h2 className="mb-5">What we do</h2>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={JusticeIcon} className="featured-block-image img-fluid" alt="" />
                                    <div className="card-body">
                                    <p className="featured-block-text">Voices for justice</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Harmony} className="featured-block-image img-fluid" alt="" /> 
                                    <div className="card-body">
                                    <p className="featured-block-text">Stand for Harmony</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Seminar} className="featured-block-image img-fluid" alt="" />
                                    <div className="card-body">
                                    <p className="featured-block-text">Youth Awareness Seminar</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Inspiring} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text">Inspiring kids</p>
                                </a>
                            </div>
                        </div>
                        
                       
                         <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Invite} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text">Inviting to Islam</p>
                                </a>
                            </div>
                        </div>
                         <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Camp} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text">Eye Health Camp</p>
                                </a>
                            </div>
                        </div>
                         <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Sports} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text">Youth Sports Fest</p>
                                </a>
                            </div>
                        </div>
                         <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Quiz} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text">Qur'an Quiz</p>
                                </a>
                            </div>
                        </div>
                         <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Blood} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text">Blood Donation Camp</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Quran} className="featured-block-image img-fluid " alt="" />

                                    <p className="featured-block-text">Quran Discussion</p>
                                </a>
                            </div>
                        </div>
                         <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Scholarship} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text">Scholarship Assistance Camp</p>
                                </a>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
  )
}

export default ActivityList
