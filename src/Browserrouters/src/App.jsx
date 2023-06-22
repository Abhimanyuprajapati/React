import { Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/contact"
import Help from "./components/Help us"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Order from "./components/order"
function App() {
  return (
    <>
    <Navbar />
   <Routes>   {/* "/" this is also call as a root page or home page*/}
    <Route path="/" element={<Home />} />    {/* this is the important props of route that are "path" and "elements"   */}
    <Route path="Contact"   element={<Contact />}/>
    <Route path="Help"  element={<Help/>} />
    <Route path="About"  element={<About />} />
    <Route path="Order" element={<Order/>}/>
   </Routes>
   </>
  )
}
export default App
