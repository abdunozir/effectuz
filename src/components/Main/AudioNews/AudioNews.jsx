import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import GET from "../../../API/GET";

export default function AudioN() {

  const { t, i18n } = useTranslation()
  const [category, setCategory] = useState([])

  const newsItem = async () => {
    try{
      const response = await GET.voice_one(2);
      setCategory(response)
      // setCategory(...response.data.filter(item => item.id == id))
    }catch(err) {
      console.log(err)
      return
    }
  }

  useEffect(()=> {
    newsItem()
  },[])

  console.log(category)


  // Plyer uchun
  let audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState({ current: 0, duration: 0 })

  const timeHandler = (e) => {
    let current = e.target.currentTime
    let duration = e.target.duration
    setTime({ ...time, current, duration })
  }

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    )
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setTime({...time, current: e.target.value})
  }

  const volumeHandler = (e) => {
    audioRef.current.volume = e.target.value / 100
  }

  const play = () => {
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <section className="audionews">
      <h2 className="audionews__title">Audio Xabarlar</h2>

      <div className="audionews__bigbox">
        <h3 className="audionews__name">Leak: Samsung to announce the Z Fold 3 and Galaxy Watch 4 in August</h3>
        <div className="audionews__box">
          <button className="audionews__btn"><i className='bx bx-chevron-left'></i></button>
          <button onClick={play} className="audionews__playbtn"> {!playing ? <i className='bx bx-play'></i> : <i className='bx bx-pause'></i>}</button>
          <button className="audionews__btn"><i className='bx bx-chevron-right'></i></button>
          <span className="audionews__time">{getTime(time.current)} / {getTime(time.duration)}</span>

          <input
            className="audionews__range"
            type="range"
            onChange={dragHandler}
            value={time.current}
            max={+time.duration}
          />

          <input className="audionews__volume" type="range" onChange={volumeHandler} />
          <audio
            onTimeUpdate={timeHandler}
            onLoadedMetadata={timeHandler}
            ref={audioRef}
            src="https://voydod.net/uploads/files/uzmusic2/Benom_Guruhi_-_Adashdimmi.mp3"

          >

          </audio>
        </div>
      </div>

      <ul className="audionews__list">
        <li className="audionews__item">
          <div className="audionews__imgbox">
            <img className="audionews__img" src="https://picsum.photos/id/13/79" alt="img" />
          </div>
          <div className="audionews__right">
            <h3 className="audionews__subtitle">Another audio news title. Box shadow farq qiladi</h3>
            <div className="audionews__flex">
              <span className="audionews__date"><i className='bx bxs-calendar-event bx-flip-horizontal'></i> 13.05.2022</span>
              <span className="audionews__category">Texno</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}