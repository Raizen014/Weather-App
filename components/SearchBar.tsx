'use client'
import { useState } from 'react'

interface Props {
  onSearch: (city: string) => void
}

export default function SearchBar({ onSearch }: Props) {
  const [city, setCity] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (city.trim() === '') return
    onSearch(city.trim())
    setCity('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2 justify-center mt-8">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="input input-md bg-neutral-700 text-neutral-200 w-80"
      />
      <button type="submit" className="btn bg-orange-400 border-0">
        Search
      </button>
    </form>
  )
}
