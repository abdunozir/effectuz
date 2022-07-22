import React from "react";

// style
import './fotonews.scss'

export default function FotoNews() {
  return(
    <section className="fotonews">
      <div className="fotonews__header">
        <h2 className="fotonews__title">Foto-yangiliklar</h2>
        <button className="fotonews__btn">Bo'limga o'tish</button>
      </div>
      <ul className="fotonews__list">
        <li className="fotonews__item">
          <img className="fotonews__img" src="https://picsum.photos/id/48/565/409" alt="asc" />
          <div className="fotonews__box">
            <h3 className="fotonews__subtitle">Samsung Galaxy F22 launched in India: Price, features, other details</h3>
          </div>
        </li>
        <li className="fotonews__item">
          <img className="fotonews__img" src="https://picsum.photos/id/48/565/409" alt="asc" />
          <div className="fotonews__box">
            <h3 className="fotonews__subtitle">Samsung Galaxy F22 launched in India: Price, features, other details</h3>
          </div>
        </li>
        <li className="fotonews__item">
          <img className="fotonews__img" src="https://picsum.photos/id/48/565/409" alt="asc" />
          <div className="fotonews__box">
            <h3 className="fotonews__subtitle">Samsung Galaxy F22 launched in India: Price, features, other details</h3>
          </div>
        </li>
      </ul>
    </section>
  )
}