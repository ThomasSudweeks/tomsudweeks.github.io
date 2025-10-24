import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Home from './Components/Home/Home'
import Error from './Components/Error/Error'

import Pom from './Components/Pom/Pom'
import Shop from './Components/Pom/Shop/Shop'
import Setup from './Components/Pom/Setup/Setup'
import About from './Components/Pom/About/About'
import Logo from './Components/Pom/Logo/Logo'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pom" element={<Pom />} />
        <Route path="pom/shop" element={<Shop />} />
        <Route path="pom/setup" element={<Setup />} />
        <Route path="pom/about" element={<About />} />
        <Route path="pom/logo" element={<Logo />} />
        <Route path="other" element={<Pom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App