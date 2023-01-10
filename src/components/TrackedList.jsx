import React from 'react'
import TrackerCard from './TrackerCard'
import { data } from '../constants'
import { self, exercise, play, work, study, social } from '../assets'
import './css/trackedList.css'

function TrackedList({ timeframe }) {
  const cardList = data.trackedData.map((data, i) => {
    let current = data.timeframes[timeframe].current;
    let previous = data.timeframes[timeframe].previous;
    let past = timeframe === "daily" ? "Yesterday" : `Last ${timeframe.replace('ly', '')}`
    let svg;

    // OLD LOGIC{WILL BE DELETED EVENTUALLY}
    // let current;
    // let previous;
    // let past;
    // let svg;
    //   if(timeframe === "daily") {
    //     current   = data.timeframes.daily.current;
    //     previous  = data.timeframes.daily.previous;
    //     past      = "Yesterday";
    //   } else if (timeframe === "weekly") {
    //     current   = data.timeframes.weekly.current;
    //     previous  = data.timeframes.weekly.previous;
    //     past      = "Last Week";
    //   } else {
    //     current   = data.timeframes.monthly.current;
    //     previous  = data.timeframes.monthly.previous;
    //     past      = "Last Month";
    //   }

      // temp logic
      if(data.title === "Work") { svg = work; }
      else if (data.title === "Social") { svg = social; }
      else if (data.title === "Self Care") { svg = self; }
      else if (data.title === "Exercise") { svg = exercise; }
      else if (data.title === "Play") { svg = play; }
      else { svg = study; }
    return <TrackerCard
      key={data.title}
      title={data.title}
      previous={previous}
      current={current}
      past={past}
      svg={svg}
    />
  });
  return (
    <div className='trackedContainer'>
      {cardList}
    </div>
  )
}

export default TrackedList