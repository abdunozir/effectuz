import React from "react";

export default function AudioN() {
  return (
    <section className="audionews">
      <h2 className="audionews__title">Audio Xabarlar</h2>

      <div className="audionews__bigbox">
        <h3 className="audionews__name">Leak: Samsung to announce the Z Fold 3 and Galaxy Watch 4 in August</h3>
        <div className="audionews__box">
          <button className="audionews__btn"><i className='bx bx-chevron-left'></i></button>
          <button className="audionews__playbtn"><i className='bx bx-play'></i></button>
          <button className="audionews__btn"><i className='bx bx-chevron-right'></i></button>
          <span className="audionews__time">01:25 / 03:38</span>
          <div className="audionews__line">
            <div className="audionews__line-radius"></div>
            <div className="audionews__lines"></div>
          </div>
          <div className="audionews__voice">
            <div className="audionews__voice-radius"></div>
            <div className="audionews__voices"></div>
          </div>

        </div>
      </div>

      <ul className="audionews__list">
        <li className="audionews__item">
          <div className="audionews__imgbox">
            <img className="audionews__img" src="https://picsum.photos/id/13/79" alt="img" />
          </div>
          <div className="audionews__right">
            <h3 className="audionews__subtitle">Another audio news title. Box shadow farq qiladi</h3>
            <div className="audionews__flex">
              <span className="audionews__date"><i className='bx bxs-calendar-event bx-flip-horizontal'></i> 13.05.2022</span>
              <span className="audionews__category">Texno</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}