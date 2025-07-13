interface WeatherData {
  name: string
  main: { temp: number }
  weather: { description: string; icon: string }[]
}

interface Props {
  data: WeatherData
}

export default function WeatherCard({ data }: Props) {
  return (
    <div className="mt-8 bg-base-100 p-6 rounded-xl shadow-xl text-center w-80 mx-auto">
      <h2 className="text-2xl font-bold text-accent mb-4">{data.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
        className="mx-auto"
      />
      <p className="text-lg font-semibold">
        {Math.round(data.main.temp)}°C
      </p>
      <p className="text-sm text-gray-500 capitalize">
        {data.weather[0].description}
      </p>
    </div>
  )
}
