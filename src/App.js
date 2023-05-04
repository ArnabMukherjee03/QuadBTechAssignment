import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Component/Home/Home";
import Show from "./Component/Show/Show";
import Shoedetails from "./Component/ShowDetails/Showdetails";
import Nav from "./Component/Universal/Nav";
import Footer from "./Component/Universal/Footer";
import Form from "./Component/form/Form"
const App = ()=>{
  return(
    <>
    <Nav/>
      <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/show" Component={Show}></Route>
          <Route path="/show/:id" Component={Shoedetails}></Route>
          <Route path="/bookticket" Component={Form}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;