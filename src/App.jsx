import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/style/style.scss'
import Main from './components/Main'
import AudioNews from './components/Main/AudioNews'
import Hududlar from './components/Main/Hududlar'
import Informer from './components/Main/Informer'
import ReadNews from './components/Main/ReadNews'
import Rukunlar from './components/Main/Ruknlar'
import AllVideoN from './components/Main/VideoNews'
import NewsLenta from './components/NewsLenta'
import ScrollTop from './components/ScrollTop'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/newslenta' element={<NewsLenta />} />
        <Route path='post/:id' element={<ReadNews />} />
        <Route path='/audionews' element={<AudioNews />} />
        <Route path='/videonews' element={<AllVideoN />} />
        <Route path='/rukunlar/:id' element={<Rukunlar />} />
        <Route path='/hududlar/:id' element={<Hududlar />} />
        <Route path='/informer/:id' element={<Informer />} />
      </Routes>
      <ScrollTop />
    </>
  )
}

export default App
