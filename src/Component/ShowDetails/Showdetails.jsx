import React, { useEffect, useState } from "react";
import Cast from "./Cast";
import { NavLink, useParams  } from "react-router-dom";
import "./Showdetails.css"

const Shoedetails = ()=>{
    const[showDetail,setShowDetail] = useState([]);
    const{id} = useParams();
    useEffect(()=>{
        fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setShowDetail(data);
        })
    },[id]);
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                 <div className="col-11 mt-4 mx-auto d-flex showdetails">
                     <img src={showDetail.image?.original} alt="" />
                     <div className="showdetailsContent">
                         <h3 className="showName ps-4 mt-4">{showDetail && showDetail.name}</h3>
                         <p className="ps-4 summary mt-2" dangerouslySetInnerHTML={{__html:`${showDetail.summary}`}}></p>
                         <div className="showInfo d-flex ps-4 mt-3">
                            <h4 className="showInfoHead" >Show Info</h4>
                            <div className="d-flex showInfoItem mt-2">
                                <div className="info-item">
                                   <p className="text-center">Network</p> 
                                   <p className="text-center">{showDetail && showDetail.network?.name}</p>
                                </div>
                                <div className="info-item">
                                   <p className="text-center">Official Site</p> 
                                   <NavLink to={showDetail && showDetail.webChannel?.officialSite} className="text-center" style={{textDecoration: "none", color: "#000"}}>{showDetail && showDetail.webChannel?.name}</NavLink>
                                </div>
                                
                                <div className="info-item">
                                   <p className="text-center">Status</p> 
                                   <p className="text-center">{showDetail && showDetail.status}</p>
                                </div>
                                <div className="info-item">
                                   <p className="text-center">Show Type</p> 
                                   <p className="text-center">{showDetail && showDetail.type}</p>
                                </div>
                                <div className="info-item">
                                   <p className="text-center">Show Type</p> 
                                   <p className="text-center">{showDetail && showDetail.genres}</p>
                                </div>
                        
                                <div className="info-item">
                                   <p className="text-center">Rating</p> 
                                   <p className="text-center"><i class="fa-solid fa-star" style={{color: "#FFDF00"}}></i> {showDetail && showDetail.rating?.average !== null ? showDetail.rating?.average : "No Rating"}</p>
                                </div>
                                <div className="info-item">
                                   <p className="text-center">Schedule</p> 
                                   <p className="text-center ">{showDetail && showDetail.schedule?.days + " "}</p>
                                   <p className="text-center">{showDetail && showDetail.schedule?.time}</p>
                                </div>
                            </div>

                         </div>
                         <div className="book d-flex justify-content-center">
                             <NavLink to="/bookticket" state={{name: showDetail.name}}  className="btn bookbtn ms-4 mt-2" >Movie Ticket</NavLink>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
        <Cast id={id}/>
        </>
    )
}

export default Shoedetails;