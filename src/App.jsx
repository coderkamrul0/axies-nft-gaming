
import React from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import CreateAndSell from './components/CreateAndSell/CreateAndSell'
import LiveAuctions from './components/LiveAuctions/LiveAuctions'

function App() {

  return (
    <div className='max-w-screen-[1920px]'>
      <Hero/>
      <CreateAndSell/>
      <LiveAuctions/>
    </div>
  )
}

export default App
