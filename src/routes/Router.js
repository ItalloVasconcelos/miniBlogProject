import  { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/About'
import Home from '../pages/home/Home'
const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
      </Routes>
      <Footer />
      </BrowserRouter>

    </div>
  )
}

export default Router