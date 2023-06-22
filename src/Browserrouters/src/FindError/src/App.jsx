import { Route, Routes } from "react-router-dom"
import Home from "./components/home"
import About from "./components/about"
import Contact from "./components/contact"
import Navbar from "./components/navbar"
import Error from "./components/error"
import Card from "./components/card"
import Nomatch from "./components/nomatch"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="error" element={<Error/>}/>
        <Route path="card" element={<Card/>}/>
        {/* if the user gave the different route the we have to give 404 page no found 
        we have to always use the " * "   for this  */}
        <Route path="*" element={<Nomatch/>}/>
      </Routes>
    </>
  )
}
export default App
