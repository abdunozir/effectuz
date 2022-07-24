import React from "react";

// style
import './topnews.scss'

//translation
import "../../../i18next"
import { useTranslation } from "react-i18next";

export default function TopNews() {

  const {t, i18n} = useTranslation()

  return (
    <section className="topnews">
      <ul className="topnews__list">
        <li className="topnews__item">
          <div className="topnews__catebox">
            <h4 className="topnews__category">Texnolgiya</h4>
          </div>
          <div className="topnews__box">
            <h2 className="topnews__title">Card hover bo'lganda title color o'zgarishi va card box-shadow ham o'zgarmoqda</h2>
            <div className="topnews__timebox">
              <span className="topnews__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> 11:45, 13.11.2022 </span>
              <span className="topnews__time"></span>
              <span><i className='bx bx-message-rounded bx-flip-horizontal'></i> 12 izoh</span>
            </div>
          </div>
          <div className="topnews__imgbox">
            <img className="topnews__img" src="https://picsum.photos/id/134/134/132" alt="rasm" />
          </div>
        </li>
        <li className="topnews__item">
          <div className="topnews__catebox">
            <h4 className="topnews__category">Texnolgiya</h4>
          </div>
          <div className="topnews__box">
            <h2 className="topnews__title">Card hover bo'lganda title color o'zgarishi va card box-shadow ham o'zgarmoqda</h2>
            <div className="topnews__timebox">
              <span className="topnews__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> 11:45, 13.11.2022 </span>
              <span className="topnews__time"></span>
              <span><i className='bx bx-message-rounded bx-flip-horizontal'></i> 12 izoh</span>
            </div>
          </div>
          <div className="topnews__imgbox">
            <img className="topnews__img" src="https://picsum.photos/id/134/134/132" alt="rasm" />
          </div>
        </li>
        <li className="topnews__item">
          <div className="topnews__catebox">
            <h4 className="topnews__category">Siyosat</h4>
          </div>
          <div className="topnews__box">
            <h2 className="topnews__title">Card hover bo'lganda title color o'zgarishi va card box-shadow ham o'zgarmoqda</h2>
            <div className="topnews__timebox">
              <span className="topnews__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> 11:45, 13.11.2022 </span>
              <span className="topnews__time"></span>
              <span><i className='bx bx-message-rounded bx-flip-horizontal'></i> 12 izoh</span>
            </div>
          </div>
          <div className="topnews__imgbox">
            <img className="topnews__img" src="https://picsum.photos/id/134/134/132" alt="rasm" />
          </div>
        </li>
        <li className="topnews__item">
          <div className="topnews__catebox">
            <h4 className="topnews__category">Texnolgiya</h4>
          </div>
          <div className="topnews__box">
            <h2 className="topnews__title">Card hover bo'lganda title color o'zgarishi va card box-shadow ham o'zgarmoqda</h2>
            <div className="topnews__timebox">
              <span className="topnews__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> 11:45, 13.11.2022 </span>
              <span className="topnews__time"></span>
              <span><i className='bx bx-message-rounded bx-flip-horizontal'></i> 12 izoh</span>
            </div>
          </div>
          <div className="topnews__imgbox">
            <img className="topnews__img" src="https://picsum.photos/id/134/134/132" alt="rasm" />
          </div>
        </li>
        <li className="topnews__item">
          <div className="topnews__catebox">
            <h4 className="topnews__category">Texnolgiya</h4>
          </div>
          <div className="topnews__box">
            <h2 className="topnews__title">Card hover bo'lganda title color o'zgarishi va card box-shadow ham o'zgarmoqda</h2>
            <div className="topnews__timebox">
              <span className="topnews__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> 11:45, 13.11.2022 </span>
              <span className="topnews__time"></span>
              <span><i className='bx bx-message-rounded bx-flip-horizontal'></i> 12 izoh</span>
            </div>
          </div>
          <div className="topnews__imgbox">
            <img className="topnews__img" src="https://picsum.photos/id/134/134/132" alt="rasm" />
          </div>
        </li>
        <li className="topnews__item">
          <div className="topnews__catebox">
            <h4 className="topnews__category">Texnolgiya</h4>
          </div>
          <div className="topnews__box">
            <h2 className="topnews__title">Card hover bo'lganda title color o'zgarishi va card box-shadow ham o'zgarmoqda</h2>
            <div className="topnews__timebox">
              <span className="topnews__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> 11:45, 13.11.2022 </span>
              <span className="topnews__time"></span>
              <span><i className='bx bx-message-rounded bx-flip-horizontal'></i> 12 izoh</span>
            </div>
          </div>
          <div className="topnews__imgbox">
            <img className="topnews__img" src="https://picsum.photos/id/134/134/132" alt="rasm" />
          </div>
        </li>
      </ul>
      <div className="topnews__btnbox">
        <button className="topnews__btn">{t ("barcha")}</button>
      </div>
    </section>
  )
}