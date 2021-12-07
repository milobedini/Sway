import Timer from '../components/timer/Timer'
import '../styles/timer.scss'
import TimerSettings from './TimerSettings'
import { useState } from 'react'
import SettingsContext from '../components/timer/SettingsContext'

const TimerPage = () => {
  const [showSettings, setShowSettings] = useState(false)
  const [meditationMinutes, setMeditationMinutes] = useState(10)

  return (
    <div className="timer-container">
      <div className="timer">
        <SettingsContext.Provider
          value={{
            showSettings,
            setShowSettings,
            meditationMinutes,
            setMeditationMinutes,
          }}
        >
          {showSettings ? <TimerSettings /> : <Timer />}
        </SettingsContext.Provider>
      </div>
    </div>
  )
}

export default TimerPage
