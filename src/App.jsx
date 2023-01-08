import { useState } from 'react'
import { UserCard, TrackedList } from './components'
import './App.css'

function App() {
    const [timeframe, setTimeframe] = useState("daily");
  return (
    <div className="App">

      <section>
        <div className="container">
          <UserCard timeframe={timeframe} setTimeframe={setTimeframe}/>
          <TrackedList timeframe={timeframe} />
        </div>
      </section>

      <section>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">F£@RL£$s</a>.
        </div>
      </section>

    </div>
  )
}

export default App
