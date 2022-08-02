import React from "react";
import Aside from "../../Aside";
import Footer from "../../Footer";
import Header from "../../Header";

// style
import '../../NewsLenta/newslenta.scss'
import Sidebar from "../../Sidebar";
import MainAside from "../MainAside";
import News from "../News";
import RukunItems from "./Rukunlar";

export default function Rukunlar() {
  return(
    <>
    <div className='container'>
      <Header />
      <div className="dflex">
        <Sidebar />
        <div className="main">
          <div className="main__box">
            <h2 className="main__title">Siyosat</h2>
            <News />
            <MainAside />
            <RukunItems />
          </div>
        </div>
        <Aside />
      </div>
      <Footer />
    </div>
  </>
  )
}