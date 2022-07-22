import React from "react";
import { NavLink } from "react-router-dom";

export default function Hudud() {
  return(
    <ul className="sidebar__list collapse" id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span>
          Toshkent (with hover)
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> Samarqand
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> Buxoro
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> Samarqand
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> Buxoro
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> Samarqand
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> Buxoro
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> Samarqand
        </li>
      </NavLink>

    </ul>
  )
}