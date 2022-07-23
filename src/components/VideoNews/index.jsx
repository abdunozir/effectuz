import React from "react";
import { Link } from "react-router-dom";

// style
import './videonews.scss'

// images
import play from '../../assets/icons/video-play.svg'
// import right from '../../assets/icons/right.svg'
let right = `
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_71_3435)">
  <path d="M5.81122 13.337H20.5696" stroke="#072D4B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.353 17.5507L20.5697 13.337" stroke="#072D4B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.353 9.12329L20.5697 13.337" stroke="#072D4B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_71_3435">
  <rect width="25.3001" height="25.2822" fill="white" transform="translate(0.540344 0.695923)"/>
  </clipPath>
  </defs>
  </svg>
`

export default function VideoNews() {
  return (
    <section className="videonews">
      <h2 className="videonews__title">Video Yangiliklar</h2>
      <div className="videonews__box">
        <div className="videonews__videobox">
          <Link to="">
            <img className="videonews__bigimg" src="https://picsum.photos/id/42/847/563" alt="ascas" />
            <span className="videonews__play"><img className="videonews__play-icon" src={play} alt="cbc"/></span>
            <div className="videonews__titlebox">
              <h3 className="videonews__subtitle">O'zbekiston hududida AQSh qo'shinlari joylashtirilmasligi ma'lum qilindi</h3>
            </div>
          </Link>
        </div>

        <div>
          <ul className="videonews__list">
            <li className="videonews__item">
              <Link className="d-flex" to="/">
                <div className="videonews__imgbox">
                  <img className="videonews__img" src="https://picsum.photos/id/78/125/70" alt="dsvs" />
                  <span className="videonews__list-play"><svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_71_3374)">
                      <path d="M3.61914 2.16621V9.89132L9.90025 6.02876L3.61914 2.16621Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_71_3374">
                        <rect width="11.5959" height="11.5877" fill="white" transform="translate(0.237 0.234924)" />
                      </clipPath>
                    </defs>
                  </svg>
                  </span>
                </div>
                <div className="videonews__list-box">
                  <p className="videonews__time"><i className='bx bx-time-five'></i> 05.11.2022</p>
                  <h4 className="videonews__list-title">Kaan Terzio'g'lu: “O'zbekiston kelajagi - raqamli iqtisodiyot...</h4>
                </div>
              </Link>
            </li>

            <li className="videonews__item">
              <Link className="d-flex" to="/">
                <div className="videonews__imgbox">
                  <img className="videonews__img" src="https://picsum.photos/id/78/125/70" alt="dsvs" />
                  <span className="videonews__list-play"><svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_71_3374)">
                      <path d="M3.61914 2.16621V9.89132L9.90025 6.02876L3.61914 2.16621Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_71_3374">
                        <rect width="11.5959" height="11.5877" fill="white" transform="translate(0.237 0.234924)" />
                      </clipPath>
                    </defs>
                  </svg>
                  </span>
                </div>
                <div className="videonews__list-box">
                  <p className="videonews__time"><i className='bx bx-time-five'></i> 05.11.2022</p>
                  <h4 className="videonews__list-title">Kaan Terzio'g'lu: “O'zbekiston kelajagi - raqamli iqtisodiyot...</h4>
                </div>
              </Link>
            </li>

            <li className="videonews__item">
              <Link className="d-flex" to="/">
                <div className="videonews__imgbox">
                  <img className="videonews__img" src="https://picsum.photos/id/78/125/70" alt="dsvs" />
                  <span className="videonews__list-play"><svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_71_3374)">
                      <path d="M3.61914 2.16621V9.89132L9.90025 6.02876L3.61914 2.16621Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_71_3374">
                        <rect width="11.5959" height="11.5877" fill="white" transform="translate(0.237 0.234924)" />
                      </clipPath>
                    </defs>
                  </svg>
                  </span>
                </div>
                <div className="videonews__list-box">
                  <p className="videonews__time"><i className='bx bx-time-five'></i> 05.11.2022</p>
                  <h4 className="videonews__list-title">Kaan Terzio'g'lu: “O'zbekiston kelajagi - raqamli iqtisodiyot...</h4>
                </div>
              </Link>
            </li>

            <li className="videonews__item">
              <Link className="d-flex" to="/">
                <div className="videonews__imgbox">
                  <img className="videonews__img" src="https://picsum.photos/id/78/125/70" alt="dsvs" />
                  <span className="videonews__list-play"><svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_71_3374)">
                      <path d="M3.61914 2.16621V9.89132L9.90025 6.02876L3.61914 2.16621Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_71_3374">
                        <rect width="11.5959" height="11.5877" fill="white" transform="translate(0.237 0.234924)" />
                      </clipPath>
                    </defs>
                  </svg>
                  </span>
                </div>
                <div className="videonews__list-box">
                  <p className="videonews__time"><i className='bx bx-time-five'></i> 05.11.2022</p>
                  <h4 className="videonews__list-title">Kaan Terzio'g'lu: “O'zbekiston kelajagi - raqamli iqtisodiyot...</h4>
                </div>
              </Link>
            </li>

            <li className="videonews__item">
              <Link className="d-flex" to="/">
                <div className="videonews__imgbox">
                  <img className="videonews__img" src="https://picsum.photos/id/78/125/70" alt="dsvs" />
                  <span className="videonews__list-play"><svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_71_3374)">
                      <path d="M3.61914 2.16621V9.89132L9.90025 6.02876L3.61914 2.16621Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_71_3374">
                        <rect width="11.5959" height="11.5877" fill="white" transform="translate(0.237 0.234924)" />
                      </clipPath>
                    </defs>
                  </svg>
                  </span>
                </div>
                <div className="videonews__list-box">
                  <p className="videonews__time"><i className='bx bx-time-five'></i> 05.11.2022</p>
                  <h4 className="videonews__list-title">Kaan Terzio'g'lu: “O'zbekiston kelajagi - raqamli iqtisodiyot...</h4>
                </div>
              </Link>
            </li>


          </ul>
          <Link className="videonews__link" to="/">Bo'limga o'tish <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_71_3435)">
              <path d="M5.81122 13.337H20.5696" stroke="#072D4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.353 17.5507L20.5697 13.337" stroke="#072D4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.353 9.12329L20.5697 13.337" stroke="#072D4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_71_3435">
                <rect width="25.3001" height="25.2822" fill="white" transform="translate(0.540344 0.695923)" />
              </clipPath>
            </defs>
          </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}