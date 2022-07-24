import React from "react";
import Carousel from 'better-react-carousel'

// style
import './navbar.scss'

//translation
import "../../../i18next"
import { useTranslation } from "react-i18next";

export default function Navbar() {

  const {t, i18n} = useTranslation()

  return(
    <section className="nav">
      <h2 className="nav__title">{t ('yangilik')}</h2>
      <ul className="nav__list">
        <Carousel cols={7} rows={1} scrollSnap="true">
          <Carousel.Item className="nav__item">
            <button className="nav__btn nav__btn-activ">{t ('barchasi')}</button>
          </Carousel.Item>
          <Carousel.Item className="nav__item">
            <button className="nav__btn">{t ('siyosat')} </button>
          </Carousel.Item>
          <Carousel.Item className="nav__item">
            <button className="nav__btn">{t ('jamiyat')}</button>
          </Carousel.Item>
          <Carousel.Item className="nav__item">
            <button className="nav__btn">{t ('sport')}</button>
          </Carousel.Item>
          <Carousel.Item className="nav__item">
            <button className="nav__btn">{t ('iqtisod')}</button>
          </Carousel.Item>
          <Carousel.Item className="nav__item">
            <button className="nav__btn">{t ('texno')}</button>
          </Carousel.Item>
          <Carousel.Item className="nav__item">
            <button className="nav__btn">{t ('ilm')}</button>
          </Carousel.Item>
          <Carousel.Item className="nav__item">
            <button className="nav__btn">{t ('turizm')}</button>
          </Carousel.Item>
          </Carousel>
      </ul>
    </section>
  )
}