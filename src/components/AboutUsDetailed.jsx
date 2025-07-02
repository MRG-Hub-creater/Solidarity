import Header from './Header.jsx'
import Footer from './Footer.jsx'
import AboutImage from '../assets/AboutUs.jpg'
import DistrictImage from '../assets/Leadership/image92.jpg'
function AboutUSDetailed(){
    return(
        <>
       
       
                     
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
                                <p>Solidarity Tamil Nadu is a vibrant, youth-driven organization devoted to nurturing a society grounded in justice, equity, and Islamic values. We are a movement built on the belief that positive social transformation begins with conscious individuals and committed communities. Rooted in this philosophy, we empower youth to become agents of change—morally guided, socially active, and intellectually alert.
                                    Our activities span across various domains including Tarbiyah (spiritual and moral development), Dawah (public awareness and countering hate narratives), Mahalla empowerment, education and career guidance, youth-oriented events, and digital activism. Through these interconnected efforts, we aim to strengthen both individual character and community capacity.
                                    We host mega state-level and district-level events, organize impactful campaigns like the Anti-Drug Campaign 2.0, and support community development initiatives such as cleaning masjids, maintaining graveyards, and field engagement in Mahallas. Our ideology training programs like Payilarangam foster deeper understanding and conviction among young minds, while our online presence ensures that our voice reaches far beyond physical spaces.
                                    With an emphasis on career-focused skill-building, we’ve initiated employment training centers, business networking hubs, and career counseling platforms. To guide the ideological and spiritual compass of youth, we conduct Jummah bayaans through trained speakers and support structured Islamic learning.
                                    We also actively monitor societal trends and youth engagement strategies, learning from models like NSS and the DMK's Payilarangam, and adapt them with an Islamic framework to maximize community impact. Our research teams continuously analyze local issues, preparing reports and proposals to bring them to the attention of public representatives like MLAs.
                                    Our Media & IT Wing consistently generates digital content—spanning health, politics, Islamic knowledge, and social issues. We are working towards strengthening this outreach by appointing full-time professionals in poster and video editing, making our message more creative, accessible, and effective.
                                    Looking forward, our vision includes reaching 1,000+ active members, implementing Mahalla-based organizational structures across all districts, crafting a Youth Election Manifesto, identifying and nurturing state-level ideological speakers, and organizing a statewide conference in September 2026.
                                    At Solidarity Tamil Nadu, we believe that change begins from within. By combining faith, discipline, and action, we are building a movement of youth who serve, uplift, and lead. Every campaign, every speech, every Mahalla visit, and every social media post is a step toward a more just and empowered future.
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
                

        </>
    )
}
export default AboutUSDetailed