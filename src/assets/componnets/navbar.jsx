import React from 'react';
import { Link } from 'react-router-dom';
import ContentCard from './contentcard';
import Contentcontainer from './contentcontainer';
export default function Navbar() {
  return (
    <>
   <div className='nav'>
    <div className="container-fluid">
<nav className='header'>
  <div className="row">
   
    <div className="col-sm-3 col-lg-3">

<h3>
  
  Blog

</h3>



</div>

<div className="col-sm-9 col-lg-9">
  <div className="container">

<div className="row">

  <div className="col-sm-6 col-lg-3">
  <Link to={"/All"}>   <a className="navbar-brand" href="#">
  

  All
</a></Link>

  </div>
  <div className="col-sm-6 col-lg-3">
  <Link to={"/FSD"}>   <a className="navbar-brand" href="#">
  

  FSD
</a></Link>
  </div>
  <div className="col-sm-6 col-lg-3">
  <Link to={"/DataAnalytic"}>   <a className="navbar-brand" href="#">
  

  Data Analytic
</a></Link>
  </div>
  <div className="col-sm-6 col-lg-3">
  <Link to={"/Frontend"}>   <a className="navbar-brand" href="#">
  Frontend

 
</a></Link>
  </div>
</div>


  </div>





</div>
  

    </div>
    </nav>
    </div>
    </div>
    </>
  );
}
