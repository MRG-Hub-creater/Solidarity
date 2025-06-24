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
                                <p>We are a youth-centered organization committed to nurturing a generation grounded in the values of Islam. Guided by the Qur’an, Hadith, and the life of Prophet Muhammad (peace be upon him), we aim to develop young individuals who are energetic, virtuous, and committed to enjoining good and forbidding wrong.
                                    Our vision is to transform society through moral and spiritual revival—empowering youth to be active witnesses to truth and justice. We believe youth are not just the future, but a powerful force for change today. By shaping character, building skills, and unlocking potential, we seek to inspire their engagement in the Islamic movement and meaningful service to the community.
                                    We operate within the framework of Islamic ethics and through peaceful, constructive efforts, believing that real change begins within and radiates outward through compassion, knowledge, and integrity.</p>
                               </div>
                                <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                                    <img src={AboutImage} className="custom-text-box-image img-fluid" alt=""/>
                                </div>
                                
                            </div>
                        </div>
                        
                    
            
                <Footer/>

        </>
    )
}
export default AboutUSDetailed