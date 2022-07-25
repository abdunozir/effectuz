import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//translation
import "../../i18next"
import { useTranslation } from "react-i18next";
import API from "../../API/API";

export default function Hudud() {

  const { t, i18n } = useTranslation()

  const [data, setData] = useState([])

  const useCategory = async () => {
    try {
      const provence = await API.provence()
      setData(provence.data)
    }catch (err) {
      console.log(err)
      return
    }
  }

  useEffect(() =>{
    useCategory()
  }, [])

  return (
    <ul className="sidebar__list collapse" id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      {
        data.map((item, key) => {
          return(
            <NavLink key={key+531} className="sidebar__link" to="/">
              <li className="sidebar__item">
                <span className="sidebar__line"></span>
                {item.name}
              </li>
            </NavLink>
          )
        })
      }
    </ul>
  )
}