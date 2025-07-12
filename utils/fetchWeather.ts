export async function fetchWeather(city: string) {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("City not found");
  return res.json();
}
