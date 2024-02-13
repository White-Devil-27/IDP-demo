import React from "react";
import Home from "./home";
import logo from "../assets/images/download.png";
export default function Navbar(){

    function handleDashboard(e){
        e.preventDefault();
        window.location.href = '/dashboard';
    }
    return(
        <>
            <nav className="container-fluid navbar navbar-expand-sm bg-light">
                <div className="container">
                    <div className='navbar-brand col-sm-3 text-center'>
                        <a href='/'><img src={logo} ></img></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-sm-8 collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item nav-link">
                                <button className="btn btn-success" aria-current="page" onClick={()=> window.location.href = '/'}>Home</button>
                            </li>
                            <li className="nav-item nav-link">
                                <button className="btn btn-primary" aria-current="page" onClick={handleDashboard}>Dashboard</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Home />
        </>
    )
}