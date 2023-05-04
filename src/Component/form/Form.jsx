import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";




const Form = (Props)=>{
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        date: " ",
        time: " ",
    });
    const location = useLocation();


    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(data));
      }, [data]);

    const InputEvent = (event)=>{
        const{name,value}= event.target;
        setData((preval)=>{
           return{
            ...preval,
            [name]: value,
        }
        })
    };

    const formSubmit = (e)=>{
        e.preventDefault();
    } ;

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">
                Movie Ticket Booking
                </h1>
                <h3 className="text-center">{location.state.name}</h3>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Reservetion Name</label>
                          <input type="text" class="form-control"  name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name"/>
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Phone</label>
                          <input type="text" class="form-control"  name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your Mobile No"/>
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                        </div>
                        <div className="d-flex" style={{gap: "30px"}}>
                        <div class="mb-3 date" style={{width: "50%"}}>
                          <label for="exampleFormControlInput1" class="form-label">Choose Date</label>
                          <input type="date" class="form-control" id="exampleFormControlInput1" name="date" value={data.date} onChange={InputEvent} placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3 time" style={{width: "50%"}}>
                          <label for="exampleFormControlInput1" class="form-label">Choose Time</label>
                          <input type="time" class="form-control" id="exampleFormControlInput1" name="time" value={data.time} onChange={InputEvent} placeholder=""/>
                        </div>
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Choose no of tickets</label>
                          <input type="Number" class="form-control" id="exampleFormControlInput1" name="ticket" value={data.ticket} onChange={InputEvent} placeholder="No of tickets"/>
                        </div>
                        <div className="col-12 mb-5">
                            <button className="btn btn-outline-secondary" type="submit">Submit Form</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;