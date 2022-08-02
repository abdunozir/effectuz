import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/style/style.scss'
import Main from './components/Main'
import AudioNews from './components/Main/AudioNews'
import Informer from './components/Main/Informer'
import ReadNews from './components/Main/ReadNews'
import Rukunlar from './components/Main/Ruknlar'
import NewsLenta from './components/NewsLenta'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/newslenta' element={<NewsLenta />} />
      <Route path='post/:id' element={<ReadNews />} />
      <Route path='/audionews' element={<AudioNews />} />
      <Route path='/rukunlar' element={<Rukunlar />} />
      <Route path='/informer/:id' element={<Informer />} />

    </Routes>
  )
}

export default App
