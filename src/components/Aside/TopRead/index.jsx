import React from "react";
import { Link } from "react-router-dom";

// style
import './topread.scss'

export default function TopRead() {
  return(
    <ul className="topread">
      <h2 className="topread__title"><i className='bx bx-file' ></i>  Eng ko'p o'qilgan</h2>

      <li className="topread__item">
        <Link to="/">
          <p className="topread__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> 11:45 | 13.07.2022</p>
          <h3 className="topread__subtitle">The price of petrol remained unchanged on July 6 after reaching a new record high on.</h3>
        </Link>
      </li>

      <li className="topread__item">
        <Link to="/">
          <p className="topread__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> 11:45 | 13.07.2022</p>
          <h3 className="topread__subtitle">The price of petrol remained unchanged on July 6 after reaching a new record high on.</h3>
        </Link>
      </li>

      <li className="topread__item">
        <Link to="/">
          <p className="topread__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> 11:45 | 13.07.2022</p>
          <h3 className="topread__subtitle">The price of petrol remained unchanged on July 6 after reaching a new record high on.</h3>
        </Link>
      </li>

      <li className="topread__item">
        <Link to="/">
          <p className="topread__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> 11:45 | 13.07.2022</p>
          <h3 className="topread__subtitle">The price of petrol remained unchanged on July 6 after reaching a new record high on.</h3>
        </Link>
      </li>

      <li className="topread__item">
        <Link to="/">
          <p className="topread__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> 11:45 | 13.07.2022</p>
          <h3 className="topread__subtitle">The price of petrol remained unchanged on July 6 after reaching a new record high on.</h3>
        </Link>
      </li>

      <li className="topread__item">
        <Link to="/">
          <p className="topread__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> 11:45 | 13.07.2022</p>
          <h3 className="topread__subtitle">The price of petrol remained unchanged on July 6 after reaching a new record high on.</h3>
        </Link>
      </li>

      <li className="topread__item">
        <Link to="/">
          <p className="topread__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> 11:45 | 13.07.2022</p>
          <h3 className="topread__subtitle">The price of petrol remained unchanged on July 6 after reaching a new record high on.</h3>
        </Link>
      </li>

      <li className="topread__item">
        <Link to="/">
          <p className="topread__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> 11:45 | 13.07.2022</p>
          <h3 className="topread__subtitle">The price of petrol remained unchanged on July 6 after reaching a new record high on.</h3>
        </Link>
      </li>
    </ul>
  )
}