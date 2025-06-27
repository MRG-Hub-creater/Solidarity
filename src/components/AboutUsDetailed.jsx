import Header from './Header.jsx'
import Footer from './Footer.jsx'
import AboutImage from '../assets/AboutUs.jpg'
import DistrictImage from '../assets/Leadership/image92.jpg'
function AboutUSDetailed(){
    return(
        <>
       <Header/>
       
                     
                        <div className='container-fluid my-4 '>
                                    <div className='container'>
                                        <div className='image-container'>
                                            <img className='district-bg' src={DistrictImage} alt="Image" />
                                            <h1 className='overlay'>About Us</h1>
                                
                                        </div>
                                    </div>
                                
                                   </div>
            <div className="container section-padding">
                    <div className="row my-4">
                                
                                <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                                    <h2>Solidarity TamilNadu</h2>
                                <p>We are a youth-driven organization committed to shaping a society rooted in Divine Guidance — the Qur'an, the Hadith, and the noble example of Prophet Muhammad (peace and blessings be upon him). Our mission is to prepare energetic, talented, virtuous, and vibrant youth who enjoin what is right, forbid what is wrong, uphold justice, and serve as witnesses to all mankind.<br/>
                                    We believe the Qur'an and Sunnah offer a complete guide to personal growth, social justice, and moral development. Youth are encouraged to seek knowledge of both Deen and Dunya, internalize Islamic values, and lead a purposeful life. The Prophet’s character — marked by compassion, humility, justice, and integrity — serves as a living model for today’s youth.
                                    Recognizing the unique energy and abilities of the youth, we strive to nurture their leadership, creativity, and commitment to community welfare. We emphasize the importance of virtuous living and active community involvement. Our focus is not merely on reacting to societal issues but proactively working towards long-term transformation.<br/>
                                    Our methodology is rooted in peaceful and constructive efforts, guided by Islamic principles and within the framework of the Constitution of India. We believe in ethical, lawful, and impactful change that contributes positively to the nation and the Ummah.<br/>
                                    Our goal is to make youth strong in faith, clear in vision, and active in building a just and moral society.
                                    </p>
                               </div>
                                <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                                    <img src={AboutImage} className="custom-text-box-image img-fluid" alt=""/>
                                </div>
                                </div>
                            <div className="container section-padding">
                                <div >
                                <h3>Aims & Objectives</h3>
                                </div>
                                <div className='mt-5'>
                                <ul className='arrow-list'>

                                
                               <li> To prepare youth for the reconstruction of society through the Divine Guidance of the Qur'an, Hadith, and the exemplary life of Prophet Muhammad (peace be upon him).</li>


                                <li>To nurture energetic, talented, virtuous, and vibrant youth who enjoin what is right, forbid what is wrong, and serve as upholders of justice.</li>


                               <li> To instill the teachings of the Qur’an and Hadith as a foundation for moral values, ethics, social justice, and personal development.</li>


                                <li>To inspire youth to emulate the Prophet Muhammad, adopting his qualities of compassion, humility, justice, and integrity.</li>


                                <li>To recognize and develop the talents of youth, encouraging leadership, creativity, and meaningful societal contributions.</li>


                               <li> To promote virtues such as honesty, kindness, empathy, and responsibility, while encouraging active participation in community life.</li>


                               <li> To channel youth talents towards supporting the Islamic movement, through social service, justice-oriented initiatives, and the spread of Islamic knowledge.</li>
                                </ul>                              
                            </div>
                        </div>
                        
                    
            </div>
                <Footer/>

        </>
    )
}
export default AboutUSDetailed