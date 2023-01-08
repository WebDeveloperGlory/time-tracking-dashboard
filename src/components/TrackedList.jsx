import React from 'react'
import TrackerCard from './TrackerCard'
import { data } from '../constants'

function TrackedList() {
  // function setTimeframe() {
  //   if() {
      
  //   }
  // }
  const cardList = data.trackedData.map((data, i) => (
    <TrackerCard
      key={data.title}
      title={data.title}
    />
  ));
  return (
    <div>
      <TrackerCard />
    </div>
  )
}

export default TrackedList