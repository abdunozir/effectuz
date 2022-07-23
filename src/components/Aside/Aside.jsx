import React from "react";

export default function Asides() {
  return (
    <div className="aside__box">
      <div className="maside__desc aside__mb">
        <i className='bx bx-gift'></i>
        Subscribe to Premium
      </div>
      <div className="maside__pricebox">
        <p className="maside__price">$8<span className="maside__price-span">/m</span></p>
        <button className="maside__btn">Upgrade</button>
      </div>
    </div>
  )
}