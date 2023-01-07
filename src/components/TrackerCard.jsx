import React from 'react'
import './css/trackerCard.css'

const TrackerCard = () => {
    const work = "work";
    const currentTime = "2hrs";
    const timeFrame = "Yesterday";
    const pastTime = "5hrs";
  return (
    <div className='card'>
        <div className="txtBlock">
            <div className="top">
                <p>{work}</p>
                <p className='dots'>...</p>
            </div>
            <div className="bottom">
                <h1>{currentTime}</h1>
                <p>{timeFrame} - {pastTime}</p>
            </div>
        </div>
    </div>
  )
}

export default TrackerCard