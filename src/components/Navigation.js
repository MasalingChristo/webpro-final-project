import React from 'react'
import '../components/Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        //untukNavigation
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
            <div className=" container px-4 px-lg-5 text-blue ">
                <Link className="navbar-brand bg-light" to="/">Home</Link>
                <button className="navbar-toggler" type="button " data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon bg-light"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link active bg-light" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item "><Link className="nav-link style bg-light" to="/About">About</Link></li>             
                    </ul>
                </div>
            </div>
        </nav>
    )   
} 

export default Navigation;
