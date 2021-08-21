import { createContext, useEffect, useState, useContext } from 'react'

import moment from 'moment'

const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {
  const [city, setCity] = useState({ name: 'İstanbul', lat: '41.0082', lon: '28.9784' })
  const [weatherForecast, setWeatherForecast] = useState([])

  const fetchData = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=minutely,hourly,current&units=metric&appid=17bc0aae930386c5dc57b8e02972be16`)
      .then(response => response.json())
      .then(data => data.daily)
      
    const data = res && await res.map((daily) => (
      {
        day: moment.unix(daily.dt).format("ddd"),
        date: moment.unix(daily.dt).format("L"),
        temperatures: daily.temp,
        weather: daily.weather[0].main
      }
    ))
    setWeatherForecast(data)
  }

  useEffect(() => {
    fetchData()
  }, [city])

  const values = {
    weatherForecast,
    setWeatherForecast,
    city,
    setCity
  }
  return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext)