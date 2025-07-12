'use client'

import { useState } from 'react'
import { fetchWeather } from '@/utils/fetchWeather'

export default function WeatherApp() {
  const [city, setCity] = useState('')
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    try {
      setLoading(true)
      setError('')
      const result = await fetchWeather(city)
      setData(result)
    } catch (err) {
      setError('City not found')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4">
      <div className="flex gap-2 mb-6">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="input input-bordered"
        />
        <button className="btn btn-accent" onClick={handleSearch}>Search</button>
      </div>

      {loading && <p className="text-accent">Loading...</p>}
      {error && <p className="text-error">{error}</p>}

      {data && (
        <div className="bg-base-100 rounded-lg p-6 shadow-lg w-full max-w-sm text-center">
          <h2 className="text-xl font-bold">{data.name}</h2>
          <p>{data.weather[0].main}</p>
          <p>🌡️ {data.main.temp} °C</p>
          <p>💧 {data.main.humidity}% humidity</p>
          <p>🌬️ {data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  )
}
