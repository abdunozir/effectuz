import React from "react";
import { Link } from "react-router-dom";

// style
import './reporter.scss'


export default function Reporter() {
  return(
    <div className="reporter">
      <p className="reporter__text"><i className='bx bx-pen'></i> Mobil muhbirga aylaning!</p>
      <div className="reporter__box">
        <p className="reporter__desc">Masofadan bizning muhbirga aylaning !</p>
        <Link className="reporter__link" to="/">Batafsil</Link>
      </div>
    </div>
  )
}