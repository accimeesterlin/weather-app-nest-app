import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { IWeatherData } from "@/types/weather-type";
import { WeatherDetailsModal } from "@/WeatherDetailsModal";
import { WeeklyStats } from "@/WeeklyStats";

type IProps = {
  weather: IWeatherData;
};

export function CardWithForm({ weather }: IProps) {
  // If the weather coord is empty, return null
  // if (!weather.coord?.lat || !weather.coord?.lat) {
  //   return null;
  // }

  let description: string = "";

  if (weather.weather.length > 0) {
    const weatherInfo = weather.weather;
    description = weatherInfo[0].description || "";
  }

  const { lat, lon } = weather.coord;

  return (
    <Card className="mt-[12px]">
      <CardHeader>
        <CardTitle>{weather.name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <DisplayCoordinates weather={weather} />
        <DisplayWeather weather={weather} />
        <DisplayWind weather={weather} />
        <DisplaySys weather={weather} />
        <DisplayBaseInfo weather={weather} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <WeatherDetailsModal weather={weather} />
        <WeeklyStats lat={lat || 0} lon={lon || 0} />
      </CardFooter>
    </Card>
  );
}

const DisplayCoordinates = ({ weather }: IProps) => {
  return (
    <div>
      <p>Lat: {weather.coord.lat}</p>
      <p>Long: {weather.coord.lon}</p>
    </div>
  );
};

const DisplayWeather = ({ weather }: IProps) => {
  return (
    <div>
      <p>Temp: {weather.main.temp}</p>
      <p>Feels Like: {weather.main.feels_like}</p>
      <p>Temp Min: {weather.main.temp_min}</p>
      {/* <p>Temp Max: {weather.main.temp_max}</p> */}
      {/* <p>Pressure: {weather.main.pressure}</p> */}
      {/* <p>Humidity: {weather.main.humidity}</p> */}
    </div>
  );
};

const DisplayWind = ({ weather }: IProps) => {
  return (
    <div>
      <p>Wind Speed: {weather.wind.speed}</p>
      <p>Wind Deg: {weather.wind.deg}</p>
      <p>Wind Gust: {weather.wind.gust}</p>
    </div>
  );
};

const DisplaySys = ({ weather }: IProps) => {
  return (
    <div>
      <p>Country: {weather.sys.country}</p>
      <p>Sunrise: {weather.sys.sunrise}</p>
      <p>Sunset: {weather.sys.sunset}</p>
    </div>
  );
};

const DisplayBaseInfo = ({ weather }: IProps) => {
  return (
    <div>
      <p>Timezone: {weather.timezone}</p>
      <p>ID: {weather.id}</p>
      {/* <p>Name: {name}</p> */}
      <p>Cod: {weather.cod}</p>
    </div>
  );
};
