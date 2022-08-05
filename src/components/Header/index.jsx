import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import currency_api from "../../API/Currency";
//translation
import "../../i18next"
import { useTranslation } from "react-i18next";
import i18next from "i18next";

// style
import './Header.scss'

// icons
import logo from '../../assets/icons/logo.svg'

export default function Header() {

  const changeLangueage = (lng) => {
    i18next.changeLanguage(lng)
  }

  const [curr, setCurr] = useState([]);


  const currncy = async () => {
    const res =await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json",{
      method:"GET",
      headers:{
        "Content-Type": "application/json"
      }
    })
    const result=await res.json()
    setCurr(result)
  }


  useEffect(() => {
    currncy()
  }, [])

  console.log(curr)
console.log("error")



  //Translation
  const { t, i18n } = useTranslation()

  return (
    <section className="header">
      <div className="header__logobox">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="header__box">
        <form className="header__form" action="">
          <input className="header__input" type="text" placeholder={t('izlash')} />
          <i className='bx bx-search header__form-icon'></i>
        </form>
        <ul className="header__list">
          <li className="header__item">USD=10871.93</li>
          <li className="header__item">EUR = 12651.00</li>
          <li className="header__item">RUB = 190.75</li>
        </ul>
      </div>

      <div className="header__settings">
        <div className="header__sunbox">
          <button className="header__whitebtn"><i className='bx bxs-sun'></i></button>
          <button className="header__nightbtn"><i className='bx bxs-moon'></i></button>
        </div>
        <select onChange={(e) => changeLangueage(e.target.value)} className="header__langbox" name="lang">
          <option className="header__langbtn" value="uz">O'zbek</option>
          <option className="header__langbtn" value="eng">Engilsh</option>
          <option className="header__langbtn" value="ru">Русский</option>
          <option className="header__langbtn" value="kiril">Ўзбек</option>
        </select>
      </div>
    </section>
  )
}