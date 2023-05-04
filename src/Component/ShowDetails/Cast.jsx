import React, { useEffect, useState } from "react";
import "./cast.css";


const Cast = (Props)=>{
    const[cast,setCast] = useState([]);
    useEffect(()=>{
        fetch(`https://api.tvmaze.com/shows/${Props.id}/cast`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCast(data)});
    },[Props.id]);
    return(
        <div className="container-fluid mt-4">
            <div className="row">
            
                <div className="col-11 mx-auto">
                <h4 className="castHead">Top Billed Cast</h4>
                <div className="media-scroller">
                {
                    cast.map(cast => {
                        return(
                            <div className="castCard mt-3">
                                <img src={cast.person.image?.original} alt="" />
                                <p className="text-center mt-2">{cast.person.name}</p>
                                <p className="text-center">as</p>
                                <p className="text-center charecter">{cast.character.name}</p>
                            </div>
                        )
                    })
                }
                </div>
                </div>
            </div>
        </div>
    )
}

export default Cast;