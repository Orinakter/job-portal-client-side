import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './Components/MainLayOut.jsx';
import Home from './Components/Pages/Home.jsx';
import Register from './Components/Pages/Register.jsx';
import Login from './Components/Pages/Login.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JobDetails from './Components/Pages/JobDetails.jsx';
import PrivateRoute from './Components/Pages/PrivateRoute.jsx';
import JobApply from './Components/Pages/JobApply.jsx';
import MyApplication from './Components/Pages/MyApplication.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayOut></MainLayOut>,
    children: [
     {
      path : "/",
      element : <Home></Home>
     },
     {
      path : "/register",
      element : <Register></Register>
     },
     {
      path : "/login",
      element : <Login></Login>
     },
     {
      path : "/my-application",
      element : <PrivateRoute>
        <MyApplication></MyApplication>
      </PrivateRoute>
     },
     {
      path : "/jobs/:id",
      element : <PrivateRoute>
        <JobDetails></JobDetails>
      </PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:4000/jobs/${params.id}`)
     },
     {
      path : "/jobApply/:id",
      element : <PrivateRoute>
        <JobApply></JobApply>
      </PrivateRoute>
     },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 <ToastContainer></ToastContainer>
 </AuthProvider>
  </StrictMode>,
)
