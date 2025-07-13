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
    <form onSubmit={handleSubmit} className="flex gap-2 justify-center mt-8">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="input input-bordered input-accent w-60"
      />
      <button type="submit" className="btn btn-accent">
        Search
      </button>
    </form>
  )
}
