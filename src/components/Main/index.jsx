import React from "react";
import Navbar from "./Navbar";

// style
import './Main.scss'
import News from "./News";
import MainAside from "./MainAside";
import TopNews from "./TopNews";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Aside from "../Aside";
import FotoNews from "./FotoNews";
import VideoNews from "../VideoNews";
import Banner from "../Banner";
import Footer from "../Footer";

export default function Main() {
  return (
    <>
      <div className='container'>
        <Header />
        <div className="dflex">
          <Sidebar />
          <div className="main">
            <div className="main__box">
              <Navbar />
              <News />
              <MainAside />
              <TopNews />
            </div>
          </div>
          <Aside />
        </div>
        <VideoNews />
        <Banner />
        <Footer />
      </div>
    </>
  )
}
