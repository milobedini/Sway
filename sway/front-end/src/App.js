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
import Feed from './pages/Feed'
import ArticleShow from './pages/ArticleShow'
import Footer from './components/Footer'
import Meditate from './pages/Meditate'
import NotesList from './pages/NotesList'
import Profile from './pages/Profile'
import PostThread from './pages/PostThread'
import EditThread from './pages/EditThread'
import LatestMeditation from './pages/LatestMeditation'
import TimerPage from './pages/TimerPage'
import About from './pages/About'

function App() {
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
            <Route path="/meditate" element={<Meditate />} />
            <Route path="/meditate/guided" element={<MeditationList />} />
            <Route path="/meditate/guided/:id" element={<MeditationShow />} />
            <Route path="/meditate/latest" element={<LatestMeditation />} />
            <Route path="/meditate/timer" element={<TimerPage />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/feed/:id" element={<ArticleShow />} />
            <Route path="/feed/new" element={<PostThread />} />
            <Route path="/feed/:id/edit" element={<EditThread />} />
            <Route path="/notes" element={<NotesList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
