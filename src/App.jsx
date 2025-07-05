import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"

import Slide from "./components/Slide"
import ActivityList from "./components/ActivityList"
import { Helmet } from 'react-helmet';
import Header from "./components/Header"
import BlogList from "./components/BlogList"


function App(){
  return(
    <> 
    <Helmet>
        <title>Solidarity Youth Organization TamilNadu</title>
        <meta name="description" content="We are a youth-centered organization committed to nurturing a generation grounded in the values of Islam. Guided by the Qur’an, Hadith, and the life of Prophet Muhammad (peace be upon him)" />
        <meta property="og:title" content="Solidarity Youth Organization TamilNadu" />
        <meta property="og:description" content="We are a youth-centered organization committed to nurturing a generation grounded in the values of Islam." />
        <meta property="og:image" content="https://www.solidaritytn.org/logo.png" />
        <meta property="og:url" content="https://www.solidaritytn.org" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    
    <Header/>
    <Slide/>
    <ActivityList/>
    <AboutUs/>
    <BlogList/>
    <ContactUs/>
    
    
    </>
  )
}
export default App