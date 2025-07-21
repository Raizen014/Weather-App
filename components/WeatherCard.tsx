import { LuWind } from "react-icons/lu";
import { WiHumidity} from "react-icons/wi";
import { IoMdRainy } from "react-icons/io";
import { motion} from 'framer-motion'
import Image from "next/image";

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
  rain?: {
    '1h'?: number
    '3h'?: number
  }
}

interface Props {
  data: WeatherData
}

export default function WeatherCard({ data }: Props) {
  const rainPercent = data.rain?.['1h'] || data.rain?.['3h'] || 0

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="flex flex-col mt-8 bg-neutral-800 opacity-30 p-6 rounded-xl shadow-xl text-center  md:max-w-[860px] mx-auto"
    >
      <h2 className="text-3xl font-bold text-neutral-200 mb-2">{data.name}</h2>
      <div className="flex items-center">
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt={data.weather[0].description}
            width={200}
            height={200}
            className="mx-auto"
          />

          <div className="flex text-start text-neutral-200 flex-col">
            <p>
              Temperature
            </p>
            <p className="text-4xl  font-semibold">
            {Math.round(data.main.temp)}°C
            </p>
            <p className="text-base text-gray-500 font-bold capitalize mt-2 mb-4">
              {data.weather[0].description}
            </p>
          </div>
      </div>


      <div className="flex text-sm justify-evenly gap-6 text-neutral-400 space-y-1">
        <p className="flex flex-col items-center">
          <WiHumidity className="size-10"/>
           {data.main.humidity}%
          <strong>Humidity</strong>
        </p>

        <p className="flex flex-col items-center">
          <LuWind className="size-10" />
          {data.wind.speed} m/s
          <strong>Wind Speed</strong>
        </p>
        <p className="flex flex-col items-center">
          <IoMdRainy  className="size-10" />
          {rainPercent} mm
          <strong>Rain</strong>
        </p>
      </div>
    </motion.div>
  )
}

