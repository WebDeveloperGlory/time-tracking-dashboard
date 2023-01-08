import React from 'react'
import TrackerCard from './TrackerCard'
import { data } from '../constants'

function TrackedList({ timeframe }) {
  const cardList = data.trackedData.map((data, i) => {
    let current;
    let previous;
    let past;
      if(timeframe === "daily") {
        current   = data.timeframes.daily.current;
        previous  = data.timeframes.daily.previous;
        past      = "Yesterday";
      } else if (timeframe === "weekly") {
        current   = data.timeframes.weekly.current;
        previous  = data.timeframes.weekly.previous;
        past      = "Last Week";
      } else {
        current   = data.timeframes.monthly.current;
        previous  = data.timeframes.monthly.previous;
        past      = "Last Month";
      }
    return <TrackerCard
      key={data.title}
      title={data.title}
      previous={previous}
      current={current}
      past={past}
    />
  });
  return (
    <div>
      {cardList}
    </div>
  )
}

export default TrackedList