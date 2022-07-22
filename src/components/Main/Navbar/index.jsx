import React from "react";
import Carousel from 'better-react-carousel'

// style
import './navbar.scss'

export default function Navbar() {

  return(
    <section className="nav">
      <h2 className="nav__title">So'nggi Yangiliklar</h2>
      <ul className="nav__list">
        <Carousel cols={7} rows={1} scrollSnap="true">
          <Carousel.Item className="nav__item">
            <button className="nav__btn nav__btn-activ">Barchasi</button>
          </Carousel.Item>
          <Carousel.Item className="nav__item">
            <button className="nav__btn">Siyosat</button>
          </Carousel.Item>
          <Carousel.Item className="nav__item">
            <button className="nav__btn">Jamiyat</button>
          </Carousel.Item>
          <Carousel.Item className="nav__item">
            <button className="nav__btn">Sport</button>
          </Carousel.Item>
          <Carousel.Item className="nav__item">
            <button className="nav__btn">Iqtisod</button>
          </Carousel.Item>
          <Carousel.Item className="nav__item">
            <button className="nav__btn">Texnologiya</button>
          </Carousel.Item>
          <Carousel.Item className="nav__item">
            <button className="nav__btn">Ilm-fan</button>
          </Carousel.Item>
          <Carousel.Item className="nav__item">
            <button className="nav__btn">Turizm</button>
          </Carousel.Item>
          </Carousel>
      </ul>
    </section>
  )
}