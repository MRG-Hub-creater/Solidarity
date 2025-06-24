import Footer from "./Footer"
import Header from "./Header"
import NewsList from "./NewsList"

function BlogList(){
    return(
        <>
        <Header/>
        <div className="container ">        
                    <div className="row">
                        <div className="col-lg-12 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className=" justify-content-center align-items-center" >
                               
                                <p className="featured-block-text">This is the detailed view of BlogList</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc augue, dapibus vitae scelerisque a, mattis eu sapien. Vivamus sed ante elementum, viverra magna sed, eleifend felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed scelerisque lacus nec turpis pellentesque dapibus. Suspendisse gravida nisi a rhoncus ultrices. Donec tincidunt, dui eu vehicula condimentum, ante leo eleifend ligula, id posuere dui metus vitae neque. Suspendisse potenti. In hac habitasse platea dictumst. Sed placerat, arcu eget bibendum viverra, enim nibh condimentum elit, ac rhoncus neque sem non elit. Ut aliquam lorem nec lacus placerat, rhoncus congue libero tincidunt.

Mauris eu laoreet metus. Pellentesque tristique euismod varius. Pellentesque odio mauris, blandit et convallis eget, ultrices nec magna. Etiam et bibendum dui. Integer faucibus scelerisque quam ac luctus. Morbi quis commodo lacus, interdum feugiat quam. Cras posuere egestas condimentum. Nunc nec felis orci. Aenean eleifend maximus sapien, non scelerisque augue fringilla in. Sed a lacinia sapien, a feugiat dui.

Suspendisse risus sapien, tincidunt et gravida eget, mattis ut ante. Vivamus volutpat, dui at suscipit pretium, nisl purus aliquet enim, vel ultricies nisl purus id sapien. Vivamus sit amet faucibus purus. Nullam vulputate scelerisque sapien, eu maximus neque gravida et. Suspendisse id nunc iaculis enim imperdiet consectetur. Pellentesque placerat quam nec semper maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec convallis metus sem, eget tincidunt dui interdum ac. Vestibulum lorem urna, molestie ut malesuada quis, sollicitudin et nibh. Pellentesque pellentesque ut nibh congue pretium.</p>
                               
                                
                                                      
                            </div>
                        </div>
                        </div>
                    
                </div>
        <NewsList/>
        <Footer/>
        </>
    )
}
export default BlogList