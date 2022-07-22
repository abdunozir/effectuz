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
      <Header />
      <Navbar />
      <News />
      <MainAside />
      <TopNews />
      <FotoNews />
    </div>
  )
}
