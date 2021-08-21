import React from 'react'

import styles from './styles.module.css'

function WeatherCard({ index, date, day, temperatures, weather }) {
  return (
    <div className={`${styles.card} ${index === 0 ? styles.today : ''} `}>
      <div className={styles.day}>{day}</div>
      <div className={styles.weatherImage}>
        <img 
          src={`/images/${weather}.png`}
          alt="weather-icon" 
        />
      </div>
      <div className={styles.degrees}>
        <span className={styles.daylight}>{temperatures.day}</span>
        <span className={styles.night}>{temperatures.night}</span>
      </div>
      <div className={styles.date}>
        {date}
      </div>
    </div>
  )
}

export default WeatherCard
