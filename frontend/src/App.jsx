import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Pom from './Components/Pom/Pom'
import Error from './Components/Error/Error'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pombuds" element={<Pom />} />
        <Route path="other" element={<Pom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
