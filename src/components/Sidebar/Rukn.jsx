import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//API
import GET from "../../API/GET";

//translation
import "../../i18next"
import { useTranslation } from "react-i18next";

export default function Rukn() {

  const {t, i18n} = useTranslation()

  const [data, setData] = useState([])

  const useCategory = async () => {
    try {
      const category = await GET.category()
      setData(category.data)
    }catch (err) {
      console.log(err)
      return
    }
  }

  useEffect(() =>{
    useCategory()
  }, [])

  return(
    <ul className="sidebar__list accordion-collapse collapse" id="panelsStayOpen-collapseOne" aria-labelledby="panelsStayOpen-headingOne">
      {
        data.map((item, key) => {
          return(
            <NavLink key={key+741} to={`/rukunlar`} className={({ isActive }) =>
            isActive ? "sidebar__link sidebar__link-active" : "sidebar__link"
          }>
              <li className="sidebar__item">
                <span className="sidebar__line"></span>
                {item.name_uz}
              </li>
            </NavLink>
          )
        })
      }
    </ul>
  )
}