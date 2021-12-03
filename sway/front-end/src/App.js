import React from 'react'
// import axios from 'axios'
import { useEffect, useState } from 'react'
import { getToken } from './helpers/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import MeditationList from './pages/MeditationList'

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
            <Route path="/meditate/guided" element={<MeditationList />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
