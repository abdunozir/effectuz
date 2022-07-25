import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";

//style
import './sidebar.scss'

// icons
import logo from '../../assets/icons/logo.svg'



export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar__logobox">
        <Link to="/">
        <img className="sidebar__logo" src={logo} alt="logo" />
        </Link>
      </div>
      <Nav />
    </section>
  )
}