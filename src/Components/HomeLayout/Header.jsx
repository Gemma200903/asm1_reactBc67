import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
        <div className="bg-dark">
            <div className="container">
        <nav className="d-flex navbar navbar-expand-lg navbar-light bg-dark position-relative">
          <a className="flex-grow-1 navbar-brand text-white" href="#">
          Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse position-absolute end-0" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <a className=" text-white nav-link" href="#">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="text-secondary nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="text-secondary nav-link" href="#">
                  Contact
                </a>
              </li>
             
            </ul>
          </div>
        </nav>
      </div>
        </div>
      
    );
  }
}
