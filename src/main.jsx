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
import Activity from './components/Activity.jsx'
import BlogList from './components/BlogList.jsx'
import DistrictLeadership from './components/DistrictLeadership.jsx'
import AddBlog from './adminPage/AddBlog.jsx'
import AddNews from './adminPage/AddNews.jsx'
import AddLeadership from './adminPage/AddLeadership.jsx'
import AdminLogin from './AdminLogin.jsx'
import PastLeader from './pages/PastLeader.jsx'
import JoinMember from './pages/JoinMember.jsx'
import Layout from './components/Layout.jsx'
import ContactUs from './components/ContactUs.jsx'
import UpcomingEvents from './pages/UpcomingEvents.jsx'
import EventsDetailed from './pages/EventsDetailed.jsx'





const router = createBrowserRouter([
  {
    path:'/',
  element:<Layout/>,
  errorElement:<NotFound/>,
    children:[
      {

  path:'',
  element:<App/>

},
{
  path:'/admin',
  element:<AdminLogin/>
  
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
  path:'/eventList',
  element:<UpcomingEvents/>
},
{
  path:'/event/:id',
  element:<EventsDetailed/>
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
},
{
  path:'/pastLeaders',
  element:<PastLeader/>
  
}
,{
  path:'/contact',
  element:<ContactUs/>
},
{
  path:'/joinMember',
  element:<JoinMember/>
}
    ]

  },
  ,{
  path:'/addBlog',
  element:<AddBlog/>
},
{
  path:'/addNews',
  element:<AddNews/>
},
{
  path:'/addLeadership',
  element:<AddLeadership/>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
