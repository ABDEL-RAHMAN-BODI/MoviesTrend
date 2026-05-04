import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Movie from './Component/Movie/Movie'
import Tv from './Component/Tv/Tv'
import Coffe from './Component/Coffe/Coffe'
import Register from './Component/Auth/Register/Register'
import Login from './Component/Auth/Login/Login'
import {Toaster} from 'react-hot-toast'
import MovieDetails from './Component/Details/MovieDetails'
import TvDetails from './Component/Details/TvDetails'
import { jwtDecode } from 'jwt-decode'
import { useEffect } from 'react'

export default function App() {
let [logindata,setLoginData] = useState(null);


  function savetoken() {
let encodedtoken = localStorage.getItem("token");
let decodedtoken = jwtDecode(encodedtoken);
setLoginData(decodedtoken)

}
useEffect(() => {
  
if (localStorage.getItem("token")!=null){
  savetoken();
}
  
}, [])

  


 let x= createBrowserRouter([
    {path:"",element:<Layout logindata={logindata} setLoginData={setLoginData}/>,children:[
      {path:"register",element:<Register/>},
      {path:"movie",element:<Movie/>},
      {path:"tv",element:<Tv/>},
      {path:"coffe",element:<Coffe/>},
      {path:"moviesdetails/:id",element:<MovieDetails/>},
      {path:"tvdetails/:id",element:<TvDetails/>},
      {path:"home",element:<Home/>},
      {index:true,element:<Login/>},
      {path:"login",element:<Login savetoken={savetoken}/>},

    ]}
  ])
  return <>
  <Toaster/>
  <RouterProvider router={x}></RouterProvider>
  </>
}

