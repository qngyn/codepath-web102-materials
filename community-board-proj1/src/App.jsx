import { useState } from 'react'
import Card from './components/Card'
import data from './server/server'
import './App.css'

function App() {
  const cards = data.map(element => {
    return <Card 
          key = {element.id}
          {...element}
    />
  })
  return (
    <div className="App">
      <div className="header"> 
        <h1> Food Truck Favorite </h1>
      </div>
      <div className = "cards-list"> 
        {cards}
      </div>
    </div>
  )
}

export default App
