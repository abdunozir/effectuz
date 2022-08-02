import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import parse from 'html-react-parser';
import GET from "../../../API/GET";
import '../../../i18next'
// style
import './readnews.scss'
import CommentPost from "./CommentPost";
import RatingPost from "./RatingPost";
import POST from "../../../API/POST";
import { useTranslation } from "react-i18next";

export default function ReadN() {

  let {t, i18n} = useTranslation()

  let {id} = useParams()

  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)

  //comment uchun
  const addComment = async (e) => {
    let commentObj = {
      new_id: id,
      description: e.nativeEvent.path[2][1].value,
      userAgent: e.nativeEvent.path[2][0].value
    }
    return await POST.comment(commentObj), newItem()
  }


  const newItem = async () => {
    try {
      setLoading(false)
      const response = await GET.new(id);
      setNews(response.data)
      setLoading(true)

    } catch (err) {
      console.log(err)
      return
    }
  }

  useEffect(() => {
    newItem()
  }, [])


  if(! loading) {
    return <h1>Loader</h1>
  }

  return (
    <section className="readnews">
      <h2 className="readnews__title">{i18n.language === "uz" ? news.title_uz : i18n.language === "ru" ? news.title_ru : i18n.language === "kiril" ? news.title_oz : news.title_uz}</h2>
      <Link className="readnews__category" to="/">{news.category_id}</Link>
      <div className="readnews__imgbox">
        <img className="readnews__img" src={news.default_img} alt="" />
      </div>
      <p className="readnews__news">
      {i18n.language === "uz" ? parse(news.description_uz) : i18n.language === "ru" ? parse(news.description_ru) : i18n.language === "kiril" ? parse(news.description_oz) : parse(news.description_uz)}
      </p>

      <RatingPost news={news} />

      <div className="readnews__combox">
        <p>{t ("izoh-qoldirish")}</p> <hr className="readnews__hr" />
      </div>

      <form className="readnews__form">
        <span className="readnews__inputbox">
          <input className="readnews__input" defaultValue="" type="text" placeholder={t ("ismingiz")} />
        </span>
        <span className="readnews__inputbox">
          <textarea className="readnews__textarea" defaultValue="" name="" cols="30" rows="10" placeholder={t ("izohingiz-bu")}></textarea>
          <button onClick={addComment} className="readnews__sendbtn" type="button">{t ("jonatish")}</button>
        </span>
      </form>

      <p className="readnews__comments"><span>{t ("barcha-izohlar")}</span> ({news.comment_count})</p>

      <ul className="readnews__list">
        {
          news.comments.length > 0 ? news.comments.map((item, key) => {
            return (
              <CommentPost key={key+14} item={item} />
            )
          }) : ""
        }
      </ul>
    </section>
  )
}