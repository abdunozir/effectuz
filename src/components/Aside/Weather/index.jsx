import React, { useEffect, useState } from "react";
import WEATHER from "../../../API/Weather";

// style
import './weather.scss'

export default function AsideWeather() {

  const [data, setData] = useState({})
  const [mains, setMain] = useState('')

  const city = "madrid"

  const weatherHandler = async (city) => {
    const { data } = await WEATHER.weather(city)
    return setData(data)
  }

  const test = () => {
    data.main && (
      data.weather[0].main == 'Clear' ? setMain("Ochiq") : data.weather[0].main == 'Clouds' ? setData("Bulutli") : data.weather[0].main == 'Haze' ? setData("tuman") : data.weather[0].main == 'Sunny' ? setData("quyoshli") : data.weather[0].main == 'Rain' ? setData("Yomgir") : data.weather[0].main == 'Drizzle' ? setData("Yomgir yogdiradi") : data.weather[0].main == 'Mist' ? setData("Tuman") : data.weather[0].main == 'Snow' ? setData("Qor") : data.weather[0].main == 'Fog' ? setData("Tuman") : setData("ishlmadi")
    )
  }

  useEffect(() => {
    test()
    weatherHandler(city)
  }, [city])

  return (
    data.main && (
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
              <p className="aside__weather-desc">{mains}</p>
              <p className="aside__weather-celsiy">{Math.round(data.main.temp_max)}&deg;c / {Math.round(data.main.temp_min)}&deg;c</p>
            </div>
            {/* <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} /> */}
            <i className='bx bx-sun'></i>
          </li>
        </ul>
      </div>
    )
  )

}