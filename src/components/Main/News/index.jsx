import React from "react";
import { Link } from "react-router-dom";

// style
import './news.scss'

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
        <li className="news__item">
          <Link className="d-flex" to="/">
            <div className="news__list-box">
              <div className="news__list-time">
              <i className='bx bxs-calendar-alt' ></i>
                11:45  <span className="news__list-line"></span>  13.07.2022
              </div>
              <h4 className="news__list-title">Card hover bo'lganda box-shadow o'zgarishi va color</h4>
            </div>
            <div className="news__list-imgbox">
              <img className="news__list-img" src="https://picsum.photos/id/641/71/70" alt="news" />
            </div>
          </Link>
        </li>
        <li className="news__item">
          <Link className="d-flex" to="/">
            <div className="news__list-box">
              <div className="news__list-time">
              <i className='bx bxs-calendar-alt' ></i>
                11:45  <span className="news__list-line"></span>  13.07.2022
              </div>
              <h4 className="news__list-title">Card hover bo'lganda box-shadow o'zgarishi va color</h4>
            </div>
            <div className="news__list-imgbox">
              <img className="news__list-img" src="https://picsum.photos/id/641/71/70" alt="news" />
            </div>
          </Link>
        </li>
        <li className="news__item">
          <Link className="d-flex" to="/">
            <div className="news__list-box">
              <div className="news__list-time">
              <i className='bx bxs-calendar-alt' ></i>
                11:45  <span className="news__list-line"></span>  13.07.2022
              </div>
              <h4 className="news__list-title">Card hover bo'lganda box-shadow o'zgarishi va color</h4>
            </div>
            <div className="news__list-imgbox">
              <img className="news__list-img" src="https://picsum.photos/id/641/71/70" alt="news" />
            </div>
          </Link>
        </li>
        <li className="news__item">
          <Link className="d-flex" to="/">
            <div className="news__list-box">
              <div className="news__list-time">
              <i className='bx bxs-calendar-alt'></i>
                11:45  <span className="news__list-line"></span>  13.07.2022
              </div>
              <h4 className="news__list-title">Card hover bo'lganda box-shadow o'zgarishi va color</h4>
            </div>
            <div className="news__list-imgbox">
              <img className="news__list-img" src="https://picsum.photos/id/641/71/70" alt="news" />
            </div>
          </Link>
        </li>
      </ul>
    </section>
  )
}