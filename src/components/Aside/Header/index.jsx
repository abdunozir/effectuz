import i18next from "i18next";
import React from "react";

// style
import './asideHeader.scss'

export default function AsideHeader() {

  const changeLangueage = (lng) => {
    i18next.changeLanguage(lng)
  }

  return (
    <>
      <ul className="aside__blist">
        <li className="aside__bitem"></li>
        <li className="aside__bitem"></li>
        <li className="aside__bitem"></li>
        <li className="aside__bitem"></li>
      </ul>
    </>
  )
}