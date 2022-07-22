import { useState } from 'react'
import './assets/style/style.scss'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="bigbox d-flex">
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
