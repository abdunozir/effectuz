import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

// style
import './Main.scss'
import News from "./News";
import MainAside from "./Aside";
import TopNews from "./TopNews";
import FotoNews from "./FotoNews";

export default function Main() {
  return(
    <div className="main">
      <div className="main__box">
        <Header />
        <Navbar />
        <News />
        <MainAside />
        <TopNews />
      </div>
    </div>
  )
}
