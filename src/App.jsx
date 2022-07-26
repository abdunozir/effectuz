import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/style/style.scss'
import Aside from './components/Aside'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import FotoNews from './components/Main/FotoNews'
import Navbar from './components/Main/Navbar'
import NewsLenta from './components/NewsLenta'
import Sidebar from './components/Sidebar'
import VideoNews from './components/VideoNews'

function App() {

  return (
    // <div className="container">
    //   <Header />
    //   <div className='d-flex'>
    //     <Sidebar />
    //     <Main />
    //     <Aside />
    //   </div>
    //   <FotoNews />
    //   <VideoNews />
    //   <Banner />
    //   <Footer />
    //   <Routes>
    //     <Route path='/newslenta' element={<NewsLenta />} />
    //   </Routes>

    // </div>

    <div className='container'>
      <Header />
      <div className='d-flex'>
        <Sidebar />
        <div className="main">
          <div className="main__box">
            <Navbar />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/newslenta' element={<NewsLenta />} />
            </Routes>
          </div>
        </div>
        <Aside />
      </div>
      <FotoNews />
      <VideoNews />
      <Banner />
      <Footer />
    </div>
  )
}

export default App
