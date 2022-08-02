import i18next from "i18next";
import React from "react";

// style
import './asideHeader.scss'

// images
import facebook from '../../../assets/icons/icons8-facebook.svg'
import twitter from '../../../assets/icons/icons8-twitter-circled.svg'
import instagram from '../../../assets/icons/icons8-instagram.svg'
import youtube from '../../../assets/icons/icons8-youtube.svg'
import telegram from '../../../assets/icons/icons8-telegram-app.svg'

export default function AsideHeader() {

  return (
    <>  
      <ul className="aside__blist">
        <li className="aside__bitem"><a href="http://" target="_blank"><img src={facebook} alt="facebook" width="40" height="40" /></a></li>
        <li className="aside__bitem"><a href="http://" target="_blank"><img src={twitter} alt="twitter" width="40" height="40" /></a></li>
        <li className="aside__bitem"><a href="http://" target="_blank"><img src={instagram} alt="intagram" width="40" height="40" /></a></li>
        <li className="aside__bitem"><a href="http://" target="_blank"><img src={youtube} alt="youtube" width="40" height="40" /></a></li>
        <li className="aside__bitem"><a href="http://" target="_blank"><img src={telegram} alt="telegram" width="40" height="40" /></a></li>

      </ul>
    </>
  )
}