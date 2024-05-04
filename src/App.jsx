// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home/Home"
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Apod from './pages/Apod/Apod';
import Astronauts from './pages/Astronauts/Astronauts';
import MarsRover from './pages/Mars/MarsRover';
import Asteroids from './pages/Asteroids/Asteroids';
import About from './pages/About/About';

const routes = (
  <Router>
    <Routes>
      <Route path='/dashboard' exact element={<Home />} />
      <Route path='https://lucent-axolotl-d36134.netlify.app/login' exact element={<Login />} />
      <Route path='/signup' exact element={<SignUp />} />
      <Route path='/apod' exact element={<Apod />} />
      <Route path='/astronauts' exact element={<Astronauts />} />
      <Route path='/mars' exact element={<MarsRover />} />
      <Route path='/asteroids' exact element={<Asteroids />} />
      <Route path='/about' exact element={<About />} />
    </Routes>
  </Router>
)

const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App