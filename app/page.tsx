'use client'

import { useState } from 'react'
import SearchBar from '@/components/SearchBar'
import WeatherCard from '@/components/WeatherCard'
import Error from '@/components/Error'
import Opening from '@/components/Opening'
import { WiDayCloudy } from 'react-icons/wi'
import { motion } from 'framer-motion'

interface WeatherData {
  name: string
  main: {
    temp: number
    humidity: number
  }
  weather: {
    description: string
    icon: string
  }[]
  wind: {
    speed: number
  }
}

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
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
    } catch {
      setError('Something went wrong.')
    }
  }

  return (
    <>
      <Opening />
      <main className="min-h-screen bg-[#FAF7F0] flex flex-col justify-start p-6">
        <div className="flex w-full justify-center">
          <motion.h1
            className="flex text-3xl font-bold items-center text-neutral-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Weather App
            <WiDayCloudy className="text-orange-400 size-16 ml-2" />
          </motion.h1>
        </div>

        <SearchBar onSearch={handleSearch} />
        {error && <Error message={error} />}
        {weather && <WeatherCard data={weather} />}
      </main>
    </>
  )
}
