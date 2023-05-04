import React, { useEffect, useState } from "react";
import "./Home.css"
import homeimg from "../../Image/re.gif";
import { NavLink } from "react-router-dom";

const Home = ()=>{
   
    return(
        <>
           <div className="container-fluid">
               <div className="row">
                    <div className="col-10 mx-auto d-flex">
                       <div className="Homecontent d-flex align-items-center justify-content-center ">
                           <h2 className="homehead">Welcome To Our Website</h2>
                           <h4 className="subhead">Choose your fav shows form our site..</h4>
                           <NavLink to="/show" className="btn homebtn mt-3">Shows</NavLink>
                       </div>
                       <div className="homeimg">
                          <img src={homeimg} alt="" />
                       </div>
                    </div>
               </div>
           </div>
        </>
    )
}

export default Home;