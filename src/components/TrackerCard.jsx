import React from 'react'
import './css/trackerCard.css'

const TrackerCard = ({ title, previous, current, past, svg }) => {
    const styles = {
      backgroundColor: `var(--${title})`
    }
  return (
    <div className='card' style={styles}>
      <img src={svg} alt="svg" />
        <div className="txtBlock">
            <div className="top">
                <p>{title}</p>
                <p className='dots'>...</p>
            </div>
            <div className="bottom">
                <h1>{current}hrs</h1>
                <p>{past} - {previous}hrs</p>
            </div>
        </div>
    </div>
  )
}

export default TrackerCard