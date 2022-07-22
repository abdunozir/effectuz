import React from "react";

// style
import './aside.scss'

export default function MainAside() {
  return (
    <section className="maside">
      <div className="maside__desc">
        <i className='bx bx-gift' ></i>
        Subscribe to Premium
      </div>
      <div className="maside__pricebox">
        <p className="maside__price">$8<span className="maside__price-span">/m</span></p>
        <button className="maside__btn">Upgrade</button>
      </div>
    </section>
  )
}