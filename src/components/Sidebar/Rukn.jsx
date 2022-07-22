import React from "react";
import { NavLink } from "react-router-dom";

export default function Rukn() {
  return(
    <ul className="sidebar__list accordion-collapse collapse" id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span>
          Barchasi
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> Siyosat
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> Jamiyat
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> Sport
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> Iqtisod
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> Texnologiya
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> Ilm-fan
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> Turizm
        </li>
      </NavLink>

    </ul>
  )
}