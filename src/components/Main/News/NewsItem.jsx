import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../API/API";

export default function NewsItem() {

  let ads = ["1", "3", "3", "4"];

  const [data, setData] = useState([])

  const newsItem = async () => {
    try{
      const response = await API.news_item();
      setData(response)
    }catch(err) {
      console.log(err)
      return
    }
  }


  useEffect(()=> {
    newsItem()
  },[])

  console.log(data)

  return(
    <>
      {
        ads.map((item, key) => {
          return(
            <li key={key+123} className="news__item">
              <Link className="d-flex" to="/">
                <div className="news__list-box">
                  <div className="news__list-time">
                    <i className='bx bxs-calendar-alt' ></i>
                    11:45  <span className="news__list-line"></span>  13.07.2022
                  </div>
                  <h4 className="news__list-title">Card hover bo'lganda box-shadow o'zgarishi va color</h4>
                </div>
                <div className="news__list-imgbox">
                  <img className="news__list-img" src="https://picsum.photos/id/641/71/70" alt="news" />
                </div>
              </Link>
            </li>
          )
        })
      }
    </>
  )
}