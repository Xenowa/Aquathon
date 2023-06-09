import { Box } from '@mui/material'
import Dashboard from "./components/Dashboard"
import Home from "./components/Home"
import About from "./components/About"
import Guidelines from "./components/Guidelines"
import Schedule from "./components/Schedule"
import Awards from "./components/Awards"
import Partners from "./components/Partners"
import Register from "./components/Register"
import Contact from "./components/Contact"
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <Box sx={{ display: "flex" }}>
      <Dashboard />
      <Box component="main" flex="1">
        <Home />
        <About />
        <Guidelines />
        <Schedule />
        <Awards />
        <Partners />
        <Register />
        <Contact />
        <Footer />
      </Box>
    </Box>
  )
}

export default App
