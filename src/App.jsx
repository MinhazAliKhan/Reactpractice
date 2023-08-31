
import './App.css'

import Toggle1 from './assets/Toggle1'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Toggle from './Toggle'
import Error from './pages/Error'
import Navbar from './Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Toggle" element={<Toggle />}></Route>
      <Route path="*" element={<Error />}></Route>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
