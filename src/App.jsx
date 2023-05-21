import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Gallery from './pages/Gallery/Gallery'
import Plans from './pages/Plans/Plans'
import Trainers from './pages/Trainers/Trainers'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Found from './pages/Found/Found'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='plans' element={<Plans/>}/>
      <Route path='trainers' element={<Trainers/>}/>
      <Route path='*' element={<Found/>}/>
    </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App