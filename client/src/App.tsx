import { useState } from "react";
import "./App.css";

import { CardWithForm } from "@/WeatherDetail";
import { SearchForm } from "@/Search";
import { Separator } from "@/components/ui/separator";
import { IWeatherData } from "@/types/weather-type";

const defaultData = {
  coord: {},
  weather: [],
  base: "",
  main: {},
  visibility: 0,
  wind: {},
  clouds: {},
  dt: 0,
  sys: {},
  timezone: 0,
  id: 0,
  name: "",
  cod: 0,
};

function App() {
  const [weather, setWeather] = useState<IWeatherData>(defaultData);
  return (
    <div className="App">
      <SearchForm weather={weather} setWeather={setWeather} />
      <Separator className="mt-4 w-[350px]" />
      <CardWithForm weather={weather} />
    </div>
  );
}

export default App;
