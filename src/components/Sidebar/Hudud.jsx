import React from "react";
import { NavLink } from "react-router-dom";

//translation
import "../../i18next"
import { useTranslation } from "react-i18next";

export default function Hudud() {

  const { t, i18n } = useTranslation()

  return (
    <ul className="sidebar__list collapse" id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span>
          {t('qoraqalpoq')}
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span>{t('toshkent')}

        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span>{t('andijon')}

        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span>
          {t ('buxora')}

        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span>
          {t ('jizzax')}

        </li>
      </NavLink>

      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span>
          {t('qashqadaryo')}
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span>{t('navoiy')}

        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span>{t('namangan')}

        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span>
          {t ('smamarqand')}

        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span>
          {t ('surxondaryo')}

        </li>
      </NavLink>

      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span>
          {t('fargona')}
        </li>
      </NavLink>
      <NavLink className="sidebar__link" to="/">
        <li className="sidebar__item">
          <span className="sidebar__line"></span>{t('xorazm')}

        </li>
      </NavLink>

    </ul>
  )
}