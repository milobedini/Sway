import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import PauseTimer from './PauseTimer'
import PlayTimer from './PlayTimer'
import SettingsTimer from './SettingsTimer'
import { useContext } from 'react'
import SettingsContext from './SettingsContext'
const strong = '#18cdba'
const red = '#f45b69'

const Timer = () => {
  const settingsInfo = useContext(SettingsContext)
  return (
    <div>
      <CircularProgressbar
        value={60}
        text={`${60}%`}
        styles={buildStyles({
          textColor: '#e0e9f3',
          pathColor: strong,
          trailColor: red,
        })}
      />
      <div style={{ marginTop: '20px' }}>
        <PlayTimer />
        <PauseTimer />
      </div>
      <div style={{ marginTop: '20px' }}>
        <SettingsTimer onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  )
}

export default Timer
