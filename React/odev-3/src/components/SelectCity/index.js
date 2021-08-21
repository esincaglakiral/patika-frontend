import { useEffect, useState } from 'react'

import { useWeather } from './../../context/WeatherContext'

import styles from './styles.module.css'

function SelectCity() {
  const { setCity } = useWeather()
  const [newCity, setNewCity] = useState("İstanbul")

  useEffect(() => {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${newCity}&appid=17bc0aae930386c5dc57b8e02972be16`)
      .then(response => response.json())
      .then(data => setCity({ name: data[0].name, lat: data[0].lat, lon: data[0].lon }))
  }, [newCity])

  return (
    <div className={styles.select}>
      <select onChange={(e) => setNewCity(e.target.value)}>
        <option value="istanbul">İstanbul</option>
        <option value="ankara">Ankara</option>
        <option value="izmir">İzmir</option>
        <option value="new york">New York</option>
        <option value="washington">Washington</option>
        <option value="moscow">Moscow</option>
        <option value="paris">Paris</option>
        <option value="london">London</option>
        <option value="berlin">Berlin</option>
        <option value="amsterdam">Amsterdam</option>
      </select>
    </div>
  )
}

export default SelectCity
