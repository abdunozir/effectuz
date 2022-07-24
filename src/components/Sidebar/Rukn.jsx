import React from "react";
import { NavLink } from "react-router-dom";

//translation
import "../../i18next"
import { useTranslation } from "react-i18next";

export default function Rukn() {

  const {t, i18n} = useTranslation()

  return(
    <ul className="sidebar__list accordion-collapse collapse" id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span>
          {t ('barchasi')}
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> {t ('siyosat')}
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> {t ('jamiyat')}
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> {t ('sport')}
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> {t ('iqtisod')}
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> {t ('texno')}
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> {t ('ilm')}
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span> {t ('turizm')}
        </li>
      </NavLink>

    </ul>
  )
}