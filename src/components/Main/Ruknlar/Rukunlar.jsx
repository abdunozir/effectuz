import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../../../i18next'


export default function RukunItems() {
  let y = ["", "", "", "", "", "",]

  const { t, i18n } = useTranslation()

  return (
    <section className="newslenta">
      <div className="newslenta__bigbox">
        <div className="newslenta__date">
          <span className="newslenta__hr"></span>
          <p>22.07.2022</p>
          <span className="newslenta__hr"></span>
        </div>

        <ul className="newslenta__list">
          {
            y.map((item, key) => {
              return (
                <li className="newslenta__item">
                  <span className="newslenta__time">19:35</span>
                  <Link to="/">
                    <div className="newslenta__box">
                      <div className="newslenta__imgbox">
                        <img className="newslenta__img" src="https://picsum.photos/id/15/134/132" alt="img" />
                      </div>
                      <div className="newslenta__titlebox">
                        <h3 className="newslenta__title">Card hover bo’lganda title color o’zgarishi va card box-shadow ham o’zgarmoqda. soat va icon ham o’zgarmoqda</h3>
                        <div className="newslenta__catebox">
                          <p>#Texnolgiya</p>
                          <p ><i className='newslenta__comment bx bx-message-rounded bx-flip-horizontal'></i>32 izoh</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <div className="text-center">
          <button className="newslenta__btn">Yana yuklash</button>
        </div>
      </div>
    </section>
  )
}