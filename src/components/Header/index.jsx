import React from "react";

// icons
import logo from '../../assets/icons/logo.svg'

export default function Header() {
  return (
    <section className="header">
      <div className="header__logobox">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
      </div>
    </section>
  )
}