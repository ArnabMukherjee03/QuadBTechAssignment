import React, { useEffect, useState } from "react";
import "./Show.css";
import { NavLink } from "react-router-dom";

const Show = ()=>{
    const[show,setshow] = useState([]);
    const[page,setpage] = useState(1)
    useEffect(()=>{
        window.scroll(0,0)
        fetch(`https://api.tvmaze.com/shows?l&page=${page}`)
        .then(res => res.json())
        .then(data => {setshow(data)
            console.log(data)
         }
        )
    },[page]);
    const prev = ()=>{  
        if(page <= 0){
            setpage(1)
        }else{
            setpage(page-1)
        }
    }
    return(
        <>
           <div className="container-fluid">
            <div className="row">
                  <h1 className="text-center mt-4 showHead">Check Out Your Fav Shows</h1>
                  <div className="col-11 mx-auto mt-4 d-flex cards align-items-center justify-content-center ">
                       {
                          show.slice(0,48).map(shows =>{
                              return(
                              <div className="showcard d-flex ">
                                 <img src={shows.image?.original} alt="" srcset="" />
                                 <div className="show-card-content d-flex mt-2 align-items-center justify-content-center">
                                    <h4 className="text-center">{shows && shows.name}</h4>
                                    <div className="d-flex align-items-center justify-content-center cardRate" style={{gap:"20px"}}>
                                    <p className="date ">{shows.premiered}</p>
                                    <p className="rate "><i class="fa-solid fa-star" style={{color: "#FFDF00"}}></i> {shows.rating.average !== null ? shows.rating.average : "No Rating"} </p>
                                    </div>
                                    <NavLink to={`/show/${shows.id}`} className="btn mt-2 mb-2 cardbtn">Explore</NavLink>
                                 </div>
                              </div>
                              )
                          })
                       }
                  </div>
            </div>
           </div>
           {/* Pagination */}
           <div className="Pagination d-flex container-fluid justify-content-center mt-4 mb-4">
            <button className="pagination-btn" onClick={()=> prev()}>Prev</button>
            <button className="pagination-btn" onClick={()=> setpage(page+1)}>Next</button>
           </div>
        </>
    )
}

export default Show;