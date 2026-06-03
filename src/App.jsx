import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Presentation from './pages/Presentation'
import Membres from './pages/Membres'
import Adhesion from './pages/Adhesion'
import Contact from './pages/Contact'
import Evenements from './pages/Evenements'

function App() {
    const [darkMode, setDarkMode] = useState(false);
  return (
     <div className={darkMode ? "dark-mode" : ""}>
    <BrowserRouter>

      <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/membres" element={<Membres />} />
        <Route path="/evenements" element={<Evenements />} />
        <Route path="/adhesion" element={<Adhesion />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </BrowserRouter>
    </div>
  )
}

export default App
