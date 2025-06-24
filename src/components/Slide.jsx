import React from 'react'
import slide1 from '../assets/slide/slide1.jpg'
import slide2 from '../assets/slide/slide2.jpg'
import slide3 from '../assets/slide/slide3.png'
import slide4 from '../assets/slide/slide4.jpg'
import slide5 from '../assets/slide/slide5.jpg'
import slide6 from '../assets/slide/slide6.jpg'

function Slide() {
  return (
    <section className="hero-section hero-section-full-height">
                    <div className="container-fluid">
                        <div className="row">
    
                            <div className="col-lg-12 col-12 p-0">
                                <div id="hero-slide" className="carousel carousel-fade slide" data-bs-ride="carousel" >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={slide1} className="carousel-image img-fluid" alt="..."/>
                                            
                                            <div className="quote-overlay ">
                                                <h1 className='quote-heading'>Guided by the Qur’an and Sunnah</h1>
                                                
                                                <p className='qoute-content'>We draw our direction and strength from the timeless guidance of the Qur’an and the teachings of Prophet Muhammad ﷺ.</p>
                                               
                                               
                                            </div>
                                        </div>
    
                                        <div className="carousel-item ">
                                            <img src={slide2} className="carousel-image img-fluid" alt="..."/>
                                            
                                            <div className="quote-overlay">
                                                <h1 className='quote-heading'> Model Life of the Prophet ﷺ</h1>
                                                
                                                <p className='qoute-content'>Inspire youth to emulate the Prophet’s character — with compassion, justice, humility, and unwavering truthfulness.</p>
                                               
                                               
                                            </div>
                                        </div>
    
                                        <div className="carousel-item ">
                                            <img src={slide3} className="carousel-image img-fluid" alt="..."/>
                                            
                                            <div className="quote-overlay">
                                                <h1 className='quote-heading'>Nurturing Vibrant & Virtuous Youth</h1>
                                                
                                                <p className='qoute-content'>We aim to raise young individuals who are honest, responsible, and actively engaged in improving society.</p>
                                               
                                               
                                            </div>
                                        </div>
    
                                        <div className="carousel-item ">
                                            <img src={slide4} className="carousel-image img-fluid" alt="..."/>
                                            
                                            <div className="quote-overlay">
                                                <h1 className='quote-heading'>Enjoining Good, Forbidding Evil</h1>
                                                
                                                <p className='qoute-content'>Empowering youth to stand for truth, justice, and morality — and to courageously resist all forms of wrongdoing.</p>
                                               
                                               
                                            </div>
                                        </div>
    
                                        <div className="carousel-item ">
                                            <img src={slide5} className="carousel-image img-fluid" alt="..."/>
                                            
                                            <div className="quote-overlay">
                                                <h1 className='quote-heading'> Witnesses to Mankind</h1>
                                                
                                                <p className='qoute-content'>Let the youth be shining examples of Islamic values — a source of inspiration and guidance to the world around them.</p>
                                               
                                               
                                            </div>
                                        </div>
    
                                        <div className="carousel-item ">
                                            <img src={slide6} className="carousel-image img-fluid" alt="..."/>
                                            
                                            <div className="quote-overlay ">
                                                <h1 className='quote-heading'>Building Talents for the Ummah</h1>
                                                
                                                <p className='qoute-content'>We recognize and nourish the unique talents of each youth — for the betterment of society and the progress of the Islamic movement.</p>
                                               
                                               
                                            </div>
                                        </div>
                                    </div>
    
                                    <button className="carousel-control-prev" type="button" data-bs-target="#hero-slide" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
    
                                    <button className="carousel-control-next" type="button" data-bs-target="#hero-slide" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </section>
  )
}

export default Slide
