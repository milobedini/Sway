import React from 'react'
// import axios from 'axios'
import { useEffect, useState } from 'react'
import { getToken } from './helpers/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import MeditationList from './pages/MeditationList'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import MeditationShow from './pages/MeditationShow'

function App() {
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get('/api/meditations/')
  //     console.log(res.data)
  //   }
  //   getData()
  // })

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meditate/guided" element={<MeditationList />} />
            <Route path="/meditate/guided/:id" element={<MeditationShow />} />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
