import React from "react";

import "./Footer.css"

const Footer = ()=>{
    return(
        <div className="footer mt-5 container-fluid" style={{backgroundColor:"#f4f5f8",color:"#000"}}>
            <div className="row">
                <div className="col-8 footer-item mx-auto d-flex">
                     <div className="item d-flex align-items-center justify-content-center">
                        <div className="logo">Assignment</div>
                        <button className="footer-btn" style={{background:"#000", color:"#fff"}}>Join Our Community</button>
                     </div>
                     <div className="item d-flex  justify-content-center">
                        <h3>Basics</h3>
                        
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Support</li>
                       
                     </div>
                     <div className="item d-flex  justify-content-center">
                        <h3>Get Involved</h3>
                       
                       <li> Contribution Bible</li>
                       <li> Add New Movie</li>
                       <li> Add New TV Show</li>
                       
                     </div>
                     <div className="item d-flex  justify-content-center">
                        <h3>Community</h3>
                        
                       <li> Guidelines</li>
                       <li> Discussions</li>
                       <li> Leaderboard</li>
                       <li> Twitter</li>
                        
                     </div>
                     <div className="item d-flex  justify-content-center">
                        <h3>Legal</h3>
                        
                       <li> Terms of Use</li>
                       <li> API Terms of Use</li>
                       <li> Privacy Policy</li>
                       
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;