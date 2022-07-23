import React from "react";

// style
import './banner.scss'

// images
import apple from '../../assets/images/apple-banner.jpg'
import google from '../../assets/images/google-banner.jpg'

export default function Banner() {
  return (
    <section className="banner">
      <p className="banner__text">Har doim xabardor bo'ling!</p>
      <p className="banner__desc"><strong>Effect.uz</strong> mobil ilovasini ko'chirib oling va barcha yangiliklar siz bilan</p>
      <div className="banner__box">
        <a href="/" target="_blank"><img className="banner__img" src={apple} alt="apple" /></a>
        <a href="/" target="_blank"><img className="banner__img" src={google} alt="GoogelPlay" /></a>
      </div>
    </section>
  )
}