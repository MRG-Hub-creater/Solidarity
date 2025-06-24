import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import './App.css'
import App from './App.jsx'
import News from './components/News.jsx'
import NotFound from './components/NotFound.jsx'
import AboutUSDetailed from './components/AboutUsDetailed.jsx'
import LeaderShip from './components/LeaderShip.jsx'
import ContactUsDetail from './components/ContactUsDetail.jsx'
import Activity from './components/Activity.jsx'
import BlogList from './components/BlogList.jsx'
import Login from './components/Login.jsx'
import DistrictLeadership from './components/DistrictLeadership.jsx'



const router = createBrowserRouter([
{
  path:'/',
  element:<App/>,
  errorElement:<NotFound/>

},
{
  path:'/admin',
  element:<Login/>
  
},
{
  path:'/news/:id',
  element:<News/>
},
{
  path:'/aboutUsDetailed',
  element:<AboutUSDetailed/>
},
{
  path:'/activity',
  element:<Activity/>
},
{
  path:'/blogList',
  element:<BlogList/>
},
{
  path:'/state',
  element:<LeaderShip/>
},
{
  path:'/district',
  element:<DistrictLeadership/>
}
,{
  path:'/contact',
  element:<ContactUsDetail/>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
