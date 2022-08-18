import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"


export default function Navbar(props) {



  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
          {props.title}
        </a> */}
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
              {/* <a className="nav-link" href="/about">
                {props.aboutText}
              </a> */}
            </li>
          </ul>
          <div className="mb-2">
            <button type="button" disabled = {props.mode === 'light'} className="btn btn-success mx-2 rounded-circle" onClick={() => {props.toggleSwitch('success')}} style={{height: '25px'}}></button>
            <button type="button" disabled = {props.mode === 'light'} className="btn btn-danger rounded-circle" onClick={() => {props.toggleSwitch('danger')}} style={{height: '25px'}}></button>
            <button type="button" disabled = {props.mode === 'light'} className="btn btn-warning mx-2 rounded-circle" onClick={() => {props.toggleSwitch('warning')}} style={{height: '25px'}}></button>
            <button type="button" disabled = {props.mode === 'light'} className="btn btn-info rounded-circle" onClick={() => {props.toggleSwitch('info')}} style={{height: '25px'}}></button>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
            
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleSwitch}
              style={{cursor: 'pointer'}}
              
            />

            <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault" style={{cursor:'pointer'}} >
            {props.mode==='light'?'Dark':'Light'} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "No Title",
  aboutText: "No About Text",
};
