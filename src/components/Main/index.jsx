import React from "react";
import Navbar from "./Navbar";

// style
import './Main.scss'
import News from "./News";
import MainAside from "./MainAside";
import TopNews from "./TopNews";

export default function Main() {
  return (
    <>
      <News />
      <MainAside />
      <TopNews />
    </>

    // <div className="main">
    //   <div className="main__box">
    //     <Navbar />
    //     <News />
    //     <MainAside />
    //     <TopNews />
    //   </div>
    // </div>
  )
}
