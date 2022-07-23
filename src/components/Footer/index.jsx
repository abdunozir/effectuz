import React from "react";

// style
import './footer.scss'

// images
import logo from '../../assets/icons/logo.svg'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logobox">
        <Link to="/"><img className="footer__logo" src={logo} alt="logo" /></Link>
      </div>

      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <ul className="footer__list">
              <li className="footer__item"></li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/"></Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/"></Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/"></Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/"></Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/"></Link>
              </li>
            </ul>
          </li>
          <li className="footer__nav-item">
            <ul className="footer__list">
              <li className="footer__item">Foydali sahifalar</li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Yangiliklar lentasi</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Foto-yangiliklar</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Video-yangiliklar</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Content</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Integrations</Link>
              </li>
            </ul>
          </li>
          <li className="footer__nav-item">
            <ul className="footer__list">
              <li className="footer__item">Ruknlar</li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Siyosat</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Texnologiya</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Sport</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Website Builder</Link>
              </li>
            </ul>
          </li>
          <li className="footer__nav-item">
            <ul className="footer__list">
              <li className="footer__item">Hududlar</li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Toshkent</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Samarqand</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Qashqadaryo</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Hosting</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Developers</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Support</Link>
              </li>
            </ul>
          </li>
          <li className="footer__nav-item">
            <ul className="footer__list">
              <li className="footer__item">Biz haqimizda</li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">About Us</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Careers</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Ko'p so'raladigan savollar</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Jamoa</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__nav-link" to="/">Bo'sh ish o'rni</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

    </footer>
  )
}