import React, { useEffect, useState } from "react";
import Aside from "../../Aside";
import Banner from "../../Banner";
import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import ReadN from "./ReadNews";

//style
import './readnews.scss'
import RealtedNews from "./RealtedNews";


export default function ReadNews() {
  return (
    <>
      <div className='container'>
        <Header />
        <div className="dflex">
          <Sidebar />
          <div className="main">
            <div className="main__box">
              <ReadN />
            </div>
          </div>
          <Aside />
        </div>
        <RealtedNews />
        <Footer />
      </div>
    </>
  )
}