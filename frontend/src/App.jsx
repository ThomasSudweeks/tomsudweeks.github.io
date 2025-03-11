import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Error from './Components/Error/Error'

import Pom from './Components/Pom/Pom'
import Shop from './Components/Pom/Shop/Shop'
import Setup from './Components/Pom/Setup/Setup'
import About from './Components/Pom/About/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pombuds" element={<Pom />} />
        <Route path="pombuds/shop" element={<Shop />} />
        <Route path="pombuds/setup" element={<Setup />} />
        <Route path="pombuds/about" element={<About />} />
        <Route path="other" element={<Pom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
