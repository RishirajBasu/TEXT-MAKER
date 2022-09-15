import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
    {props.searchbar?<form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} my-2 my-sm-0`} type="submit">Search</button>
    </form>:""}
    <div className={`custom-control custom-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
    <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggle}/>
    <label className="custom-control-label" htmlFor="customSwitch1">Dark Mode</label>
  </div>
  </div>
</nav>
    </div>
  )
}
Navbar.defaultProps={
    title:"TExt-MAker",
    searchbar:false
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    searchbar:PropTypes.bool.isRequired
}
export default Navbar
