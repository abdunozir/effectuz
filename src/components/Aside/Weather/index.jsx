import React from "react";

// style
import './weather.scss'

export default function AsideWeather() {
  return (
    <div className="aside__weather">
      <div className="aside__weather-box">
        <ul className="aside__weather-hlist">
          <li className="aside__weather-hitem">Qashqadaryo, Qarshi</li>
        </ul>
        <div className="aside__weather-btnbox">
          <button className="aside__weather-hbtn"><i className='bx bx-chevron-left'></i></button>
          <button className="aside__weather-hbtn"><i className='bx bx-chevron-right'></i></button>
        </div>
      </div>

      <ul className="aside__weather-list">
        <li className="aside__weather-item">
          <div className="aside__weather-bbox">
            <p className="aside__weather-desc">Quyoshli</p>
            <p className="aside__weather-celsiy">31c / 25c</p>
          </div>
          <i className='bx bx-sun'></i>
        </li>
      </ul>
    </div>
  )
}