import React from "react";
import { Link } from "react-router-dom";

// style
import './news.scss'
import NewsItem from "./NewsItem";

export default function News() {

  return(
    <section className="news">
      <div className="news__left">
        <div className="news__imgbox">
          <img className="news__img" src="https://picsum.photos/id/541/406/306" alt="news" />
        </div>
        <div className="news__left-flex">
          <div className="news__left-category">
           <i className='bx bx-crosshair'></i>
           Texnologiya
          </div>
          <div className="news__left-time">
            <i className='bx bx-time-five'></i>
            Bugun <span className="news__dot"></span>
            15:45
          </div>
        </div>
          <h3 className="news__title">Samsung Galaxy F22 launched in India: Price, features, other details</h3>
          <p className="news__desc">Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment.</p>
      </div>

      <ul className="news__list">
        <NewsItem />
      </ul>
    </section>
  )
}