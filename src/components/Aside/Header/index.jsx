import React from "react";

// style
import './asideHeader.scss'

export default function AsideHeader() {
  return (
    <>
      <div className="aside__settings">
        <div className="aside__sunbox">
          <button className="aside__whitebtn"><i className='bx bxs-sun'></i></button>
          <button className="aside__nightbtn"><i className='bx bxs-moon'></i></button>
        </div>
        <select className="aside__langbox" name="lang">
          <option className="aside__langbtn" value="ozbekcha">O'zbek</option>
          <option className="aside__langbtn" value="engilsh">Engilsh</option>
          <option className="aside__langbtn" value="russkiy">Русский</option>
          <option className="aside__langbtn" value="uzbek">Ўзбек</option>
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