import React from 'react'
import { data } from '../constants'
import jeremy from '../assets/jeremy.png'
import './css/userCard.css'

const UserCard = ({ timeframe, setTimeframe }) => {
    const time = data.timeFrame.map((time, i) => (
        <p 
            key={`${i}-time`}
            onClick={() => setTimeframe(time)}
            className={timeframe === time ? "active" : null}
        >{time}</p>
    ))
  return (
    <div className='userCard'>
        <div className="topSection">
            <div className="usrImg">
                <img src={jeremy} alt="userImg" />
            </div>
            <div className="txt">
                <p>{data.user.title}</p>
                <h1>{data.user.name}</h1>
            </div>
        </div>
        <div className="bottomSection">
            <div className="txt">
                {time}
            </div>
        </div>
    </div>
  )
}

export default UserCard