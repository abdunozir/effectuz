import React from "react";

// style
import './Header.scss'

export default function Header() {
  return(
    <section className="header">
      <form className="header__form" action="">
        <input className="header__input" type="text" placeholder="Sayt bo'ylab izlash" />
        <i className='bx bx-search header__form-icon'></i>
      </form>
      <ul className="header__list">
        <li className="header__item">USD=10871.93</li>
        <li className="header__item">EUR = 12651.00</li>
        <li className="header__item">RUB = 190.75</li>
      </ul>
    </section>
  )
}