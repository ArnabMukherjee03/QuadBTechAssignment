import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ()=>{
    return(
      <div style={{background:"#f4f5f8"}}>
        <div className="container" >
        <div className="row">
            <div className="col-11 mx-auto">
               <nav class="navbar navbar-expand-lg ">
                 <h1 className="nav-link mt-2 logo"> Assignment </h1>
                 <button class="navbar-toggler" style={{boxShadow: "none"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <i class="fa-solid fa-bars " style={{color:"#fff",fontSize:"20px"}}></i>
                 </button>
                 <div class="collapse navbar-collapse" style={{textAlign:"center"}} id="navbarSupportedContent">
                   <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li class="nav-item">
                       <NavLink to="/" className="nav-link" aria-current="page" href="#">Home</NavLink>
                     </li>
                     
                    <li class="nav-item">
                       <NavLink to="/show" className="nav-link" aria-current="page" href="#">Shows</NavLink>
                     </li>
                    
                     
                     
                   </ul> 
               </div>
               </nav>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Nav;