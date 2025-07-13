'use client'

import { useState } from 'react'
import SearchBar from '@/components/SearchBar'
import WeatherCard from '@/components/WeatherCard'
import Error from '@/components/Error'

export default function Home() {
  const [weather, setWeather] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (city: string) => {
    setError(null)
    setWeather(null)

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API}&units=metric`
      )
      const data = await res.json()

      if (data.cod !== 200) {
        setError('City not found.')
      } else {
        setWeather(data)
      }
    } catch (err) {
      setError('Something went wrong.')
    }
  }

  return (
    <main className="min-h-screen bg-base-200 flex flex-col items-center justify-start p-6">
      <h1 className="text-4xl font-bold mt-10 text-accent">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <Error message={error} />}
      {weather && <WeatherCard data={weather} />}
    </main>
  )
}
