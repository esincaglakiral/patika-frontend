import React from 'react'

import styles from './styles.module.css'

import { useWeather } from './../../context/WeatherContext'

import WeatherCard from './../WeatherCard'

function WeatherList() {
  const {weatherForecast} = useWeather()
  return (
    <div className={styles.weatherList}>
      {weatherForecast && weatherForecast.map((weatherDay, index) => {
        return (
          <WeatherCard key={index} index={index} date={weatherDay.date} day={weatherDay.day} temperatures={weatherDay.temperatures} weather={weatherDay.weather} />
        )
      }) }
    </div>
  )
}

export default WeatherList
