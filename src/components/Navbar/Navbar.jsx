import React from "react";
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
        <a className="navbar-brand ms-3" href="#">
          <img className="logo" src="./images/logo.png" alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarNav">
          <ul className="navbar-nav gap-3 text-dark fw-5 fw-bold w-100">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Text Translation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">PDF Translation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Dictation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <form className=" d-flex justify-content-center gap-4 pe-5" role="search">
            <button className="btn btn-outline-primary w-100 text-nowrap px-5 text-center" type="submit">Sign Up</button>
            <button className="btn btn-primary w-100 px-5 text-nowrap" type="submit">Login</button>
          </form>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
