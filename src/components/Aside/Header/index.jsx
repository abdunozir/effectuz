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
      <div className="aside__settings">
        <div className="aside__sunbox">
          <button className="aside__whitebtn"><i className='bx bxs-sun'></i></button>
          <button className="aside__nightbtn"><i className='bx bxs-moon'></i></button>
        </div>
        <select onChange={(e) => changeLangueage(e.target.value)} className="aside__langbox" name="lang">
          <option className="aside__langbtn" value="uz">O'zbek</option>
          <option className="aside__langbtn" value="eng">Engilsh</option>
          <option className="aside__langbtn" value="ru">Русский</option>
          <option className="aside__langbtn" value="kiril">Ўзбек</option>
        </select>
      </div>

      <ul className="aside__blist">
        <li className="aside__bitem"></li>
        <li className="aside__bitem"></li>
        <li className="aside__bitem"></li>
        <li className="aside__bitem"></li>
      </ul>
    </>
  )
}