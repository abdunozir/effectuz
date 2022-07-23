import { useState } from 'react'
import './assets/style/style.scss'
import Aside from './components/Aside'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Main from './components/Main'
import FotoNews from './components/Main/FotoNews'
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
    </div>
  )
}

export default App
