import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
          <ul className="nav nav-pills bottom-bar nav-justified" id="navigation">
              <li className="nav-item">
                  <NavLink to={'/'} className="nav-link active" >Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to={'/About'} className="nav-link active" >About</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to={'/Contact'} className="nav-link active" >Contact</NavLink>
              </li>
          </ul>
    </div>
  )
}

export default Navbar
