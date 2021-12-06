import React from 'react'
import Button from './Button'
import './ControlPanel.scss'
import logo from '../../assets/Favicon 2.svg'

const ControlPanel = ({
  play,
  isPlaying,
  duration,
  currentTime,
  handleFavourite,
  handleRemove,
  hasLiked,
}) => {
  function timeConversion(seconds) {
    if (!seconds) return '00m 00s'

    let duration = seconds
    const hours = duration / 3600
    duration = duration % 3600

    let min = parseInt(duration / 60)
    duration = duration % 60

    let sec = parseInt(duration)

    if (sec < 10) {
      sec = `0${sec}`
    }
    if (min < 10) {
      min = `0${min}`
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`
      // eslint-disable-next-line
    } else if (min == 0) {
      return `00m ${sec}s`
    } else {
      return `${min}m ${sec}s`
    }
  }

  return (
    <>
      <div className="control-panel-wrapper">
        <div className="control-panel">
          <div className="timer">{timeConversion(currentTime)}</div>
          <Button play={play} isPlaying={isPlaying} />
          <div className="timer">{timeConversion(duration)}</div>
        </div>
        <div className="timer-logo">
          {!hasLiked ? (
            <button className="btn" onClick={handleFavourite}>
              <i
                className="fas fa-bookmark save fa-2x"
                style={{ color: '#18cdba' }}
              ></i>
            </button>
          ) : (
            <button className="btn" onClick={handleRemove}>
              <i
                className="fas fa-minus-square fa-2x"
                style={{ color: '#18cdba' }}
              ></i>
            </button>
          )}
          <img src={logo}></img>
        </div>
      </div>
    </>
  )
}

export default ControlPanel
