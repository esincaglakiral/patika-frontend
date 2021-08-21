import React from 'react'

import { WeatherProvider } from './context/WeatherContext'

import SelectCity from './components/SelectCity'
import WeatherList from './components/WeatherList'

import './App.css'

function App() {
  return (
    <div id="app">
      <WeatherProvider>
        <SelectCity />
        <WeatherList />
      </WeatherProvider>
    </div>
  )
}

export default App
