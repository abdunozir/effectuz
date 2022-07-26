import React, { useEffect, useState } from "react";
import API from "../../../API/API";

// style
import './weather.scss'

export default function AsideWeather() {

  const [data, setData] = useState({})

  const city = "Nukus"

  const weatherHandler = async (city) => {
    const {data} = await API.weather(city)
    return setData(data)
  }

  useEffect(() => {
    weatherHandler(city)
  }, [city])

  console.log(data)
  // console.log(data.weather[0].main)

  return (
    <div className="aside__weather">
      <div className="aside__weather-box">
        <ul className="aside__weather-hlist">
          <li className="aside__weather-hitem">{data.name}</li>
        </ul>
        <div className="aside__weather-btnbox">
          <button className="aside__weather-hbtn"><i className='bx bx-chevron-left'></i></button>
          <button className="aside__weather-hbtn"><i className='bx bx-chevron-right'></i></button>
        </div>
      </div>

      <ul className="aside__weather-list">
        <li className="aside__weather-item">
          <div className="aside__weather-bbox">
            <p className="aside__weather-desc">is</p>
            {/* <p className="aside__weather-celsiy">{Math.round(data.main.temp_max)} c / {Math.round(data.main.temp_min)}c</p> */}
          </div>
          {/* <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={weather.weather[0].description} /> */}
          <i className='bx bx-sun'></i>
        </li>
      </ul>
    </div>
  )
}