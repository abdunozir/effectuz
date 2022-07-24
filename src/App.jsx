import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/style/style.scss'
import Aside from './components/Aside'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Main from './components/Main'
import FotoNews from './components/Main/FotoNews'
import NewsLenta from './components/NewsLenta'
import Sidebar from './components/Sidebar'
import VideoNews from './components/VideoNews'

function App() {

  return (
    <div className="container">
      <div className='d-flex'>
        <Sidebar />
        <Main />
        <Aside />
      </div>
      <FotoNews />
      <VideoNews />
      <Banner />
      <Footer />
      <Routes>
        <Route path='/newslenta' element={<NewsLenta />} />
      </Routes>

    </div>
  )
}

export default App
