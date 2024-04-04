import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home/Home";
import JobDetlias from "../pages/jobDetails/jobdetakis";



import ApplyJob from "../pages/applyJob/applijobs";
import Login from "../Login/Login";
import Register from "../registar/reagister";
import Applicationjon from "../pages/applyJob/ApplicatrionJob";
import CreateJob from "../pages/CreateJob/createjob";
import AllJobs from "../pages/Navber/alljobs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
   
      children: [
        {
          path: "/",
          element: <Home />,

    
          
          },


          {
            path: "/login",
            element: <Login />,
          },
        {
            path: "/register",
            element: <Register/>,
          },
      
        {
          path: "details/:id",
          element: <JobDetlias />
        },
        {
          path: "apply/:id",
          element: <ApplyJob/>,
        },
        {
          path: "/applicationjob",
          element: <Applicationjon />,
        },

        {
          path: "/createJob",
          element: <CreateJob />,
        },

        {
          path: "/AllJobs",
          element: <AllJobs />,
        },



      ],
    },
  ]);

export default router;