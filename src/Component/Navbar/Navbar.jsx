import React from 'react'
import {Link, useNavigate} from "react-router-dom"

export default function Navbar({logindata,setLoginData}) {
 let navigate = useNavigate()

 
  function logout() {
  localStorage.removeItem("token")
  setLoginData(null)
  navigate("/") 
 }
 
 return <>
  <nav className="navbar navbar-expand-lg auth">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="">Trend</Link>
    <button className="navbar-toggler text-white border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className=" collapse navbar-collapse" id="navbarSupportedContent">
      {logindata?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="movie">Movie</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="tv">Tv</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="coffe">Coffee</Link>
        </li>
      </ul> :""}
     
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {logindata? <li className="nav-item">
          <Link onClick={logout} className="nav-link text-white" to="">Logout</Link>
        </li> :<>
        <li className="nav-item">
          <Link className="nav-link text-white" to="">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="register">Register</Link>
        </li>
              </>}
      
        
       
      </ul>
    </div>
  </div>
</nav>

  </>
}
