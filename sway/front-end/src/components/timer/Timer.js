import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import PauseTimer from './PauseTimer'
import PlayTimer from './PlayTimer'
import SettingsTimer from './SettingsTimer'
import { useContext, useState, useEffect, useRef } from 'react'
import SettingsContext from './SettingsContext'
import bell from '../../audio/Meditation-bell-sound.mp3'
const strong = '#18cdba'
const red = '#f45b69'

const Timer = () => {
  const settingsInfo = useContext(SettingsContext)
  const [isPaused, setIsPaused] = useState(true)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const secondsLeftRef = useRef(secondsLeft)
  const isPausedRef = useRef(isPaused)

  const audio = useRef(null)
  const playAudio = () => {
    console.log(audio.current)
    audio.current.play()
  }

  function tick() {
    secondsLeftRef.current--
    setSecondsLeft(secondsLeftRef.current)
  }

  useEffect(() => {
    secondsLeftRef.current = settingsInfo.meditationMinutes * 60
    setSecondsLeft(secondsLeftRef.current)

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return
      }
      if (secondsLeftRef.current === 0) {
        playAudio()
        return () => clearInterval(interval)
      }
      tick()
    }, 1000)
    return () => clearInterval(interval)
  }, [settingsInfo])

  const totalSeconds = settingsInfo.meditationMinutes * 60
  const percentage = Math.round((secondsLeft / totalSeconds) * 100)
  const minutes = Math.floor(secondsLeft / 60)
  let seconds = secondsLeft % 60
  if (seconds < 10) seconds = '0' + seconds

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes + ':' + seconds}
        styles={buildStyles({
          textColor: '#e0e9f3',
          pathColor: strong,
          trailColor: red,
        })}
      />
      <audio src={bell} ref={audio}></audio>
      <div style={{ marginTop: '20px' }}>
        {isPaused ? (
          <PlayTimer
            onClick={() => {
              setIsPaused(false)
              isPausedRef.current = false
              console.log('play')
            }}
          />
        ) : (
          <PauseTimer
            onClick={() => {
              setIsPaused(true)
              isPausedRef.current = true
            }}
          />
        )}
      </div>
      <div style={{ marginTop: '20px' }}>
        <SettingsTimer onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  )
}

export default Timer
