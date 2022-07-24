import React from "react";

// style
import './newslenta.scss'

// images
import timehover from '../../assets/icons/time-hover.svg'
import time from '../../assets/icons/time.svg'

export default function NewsLenta() {

  return (
    <section className="newslenta">
      <div className='d-flex justify-content-center align-items-center mb-3'>
        <span className='newslenta__left'></span>
        <p className='newslenta__time m-0'>22.07.2022</p>
        <span className='newslenta__right'></span>
      </div>
      <ul className='newslenta__list'>
        <li className='d-flex align-items-center'>
          <span className='newslenta__list-time'>19:30</span>
          <img className='newslenta__list-clock' src={time} alt="card-clock" />
          <img className='newslenta__list-img' src="https://picsum.photos/id/23/132/134"alt="pubg" />
          <div>
            <h4>Card hover bo’lganda title color o’zgarishi va card box-shadow ham o’zgarmoqda</h4>
            <p className='m-0'>#Ilm-fan</p>
          </div>
        </li>
      </ul>

      <div className='d-flex justify-content-center align-items-center mb-3'>
        <span className='newslenta__left'></span>
        <p className='newslenta__time m-0'>21.07.2022</p>
        <span className='newslenta__right'></span>
      </div>

      <ul className='newslenta__list'>
        <li className='d-flex align-items-center'>
          <span className='newslenta__list-time'>19:30</span>
          <img className='newslenta__list-clock' src={timehover} alt="card-clock" />
          <img className='newslenta__list-img' src="https://picsum.photos/id/23/132/134"alt="pubg" />
          <div>
            <h4>Card hover bo’lganda title color o’zgarishi va card box-shadow ham o’zgarmoqda</h4>
            <p className='m-0'>#Ilm-fan</p>
          </div>
        </li>
      </ul>

      <div className='text-center'>
        <button className='news-cards__btn px-4 py-2'>Yana yuklash</button>
      </div>
    </section>
  )
}