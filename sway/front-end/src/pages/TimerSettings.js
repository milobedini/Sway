import ReactSlider from 'react-slider'
import SettingsContext from '../components/timer/SettingsContext'
import '../styles/timer-slider.scss'
import { useContext } from 'react'
import BackButton from '../components/timer/BackButton'

const TimerSettings = () => {
  const settingsInfo = useContext(SettingsContext)
  return (
    <div style={{ textAlign: 'left' }}>
      <label>{settingsInfo.meditationMinutes} Minutes</label>
      <ReactSlider
        className={'timer-slider'}
        thumbClassName={'timer-thumb'}
        trackClassName={'timer-track'}
        value={settingsInfo.meditationMinutes}
        onChange={(newValue) => settingsInfo.setMedMinutes(newValue)}
        min={1}
        max={60}
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  )
}

export default TimerSettings
