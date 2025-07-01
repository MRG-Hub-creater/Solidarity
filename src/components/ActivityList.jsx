import React from 'react'
import YouthEmpower from '../assets/Activities/youthAwarenessSeminars.png'
import Skill from '../assets/Activities/skillDevelopment.png'
import Tarbiyah from '../assets/Activities/tarbiya.png'
import Community from '../assets/Activities/communityDevelopment.png'
import Public from '../assets/Activities/publicAwarenessCampaigns.png'
import Media from '../assets/Activities/media.png'
import Dawah from '../assets/Activities/dawah.png'
import Voice from '../assets/Activities/JusticeIcon.png'
import Health from '../assets/Activities/healthCamp.png'
import Sports from '../assets/Activities/sports.png'
import Quiz from '../assets/Activities/quranQuiz.png'
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
                                    <img src={YouthEmpower} className="featured-block-image img-fluid" alt="" />
                                    <div className="card-body">
                                    <p className="featured-block-text">Youth Empowerment Programs</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Skill} className="featured-block-image img-fluid" alt="" /> 
                                    <div className="card-body">
                                    <p className="featured-block-text">Skill Development & Career Guidance</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Tarbiyah} className="featured-block-image img-fluid" alt="" />
                                    <div className="card-body">
                                    <p className="featured-block-text">Tarbiyah & Ideological Training</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                         <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Community} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text">Community Development & Mahalla Engagement</p>
                                </a>
                            </div>
                        </div>
                         <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Public} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text">Public Awareness Campaigns
</p>
                                </a>
                            </div>
                        </div>
                         <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Media} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text"> Media & Digital Outreach</p>
                                </a>
                            </div>
                        </div>
                         <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Dawah} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text"> Dawah & Social Messaging</p>
                                </a>
                            </div>
                        </div>
                       
                         <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Voice} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text"> Voice for Justice</p>
                                </a>
                            </div>
                        </div>
                         <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Health} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text">Health Camps
</p>
                                </a>
                            </div>
                        </div>
                         <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Sports} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text"> Youth Sports Fest</p>
                                </a>
                            </div>
                        </div>
                         <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Quiz} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text">Qur'an Quiz Competitions</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center card">
                                <a href="/" className="d-block">
                                    <img src={Scholarship} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text">Scholarship Assistance Camps</p>
                                </a>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
  )
}

export default ActivityList
