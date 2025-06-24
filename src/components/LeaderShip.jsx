import Footer from "./Footer"
import Header from "./Header"
import { useParams } from "react-router-dom"

function LeaderShip(){
    const {type} = useParams();
    return(
        <>

        <Header/>
         <div className="container ">        
                    <div className="row">
                        <div className="col-lg-12 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className=" justify-content-center align-items-center" >
                               {type==='state'?
                                <p className="featured-block-text">This is the detailed view of State leaders</p>
                                
                                :<p className="featured-block-text">This is the detailed view of District leaders</p>
                                       }                        
                            </div>
                        </div>
                        </div>
                    
                </div>
        <Footer/>

        </>
    )
}
export default LeaderShip