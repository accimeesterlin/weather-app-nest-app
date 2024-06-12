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

export function WeatherDetail({ weather }: IProps) {
  // If the weather coord is empty, return null
  if (!weather.coord?.lat || !weather.coord?.lat) {
    return null;
  }

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

export const LineItem = ({ label, value }: { label: string; value: any }) => {
  return (
    <div>
      <p>
        <b>{label}:</b> {value}
      </p>
    </div>
  );
};

export const DisplayCoordinates = ({ weather }: IProps) => {
  return (
    <div>
      <LineItem value={weather.coord.lat} label="Lat" />
      <LineItem value={weather.coord.lon} label="Long" />
    </div>
  );
};

export const DisplayWeather = ({ weather }: IProps) => {
  // Other weather data
  // temp_max, pressure, humidity
  return (
    <div>
      <LineItem value={weather.main.temp} label="Temp" />
      <LineItem value={weather.main.feels_like} label="Feels Like" />
      <LineItem value={weather.main.temp} label="Temp Min" />
    </div>
  );
};

export const DisplayWind = ({ weather }: IProps) => {
  return (
    <div>
      <LineItem value={weather.wind.speed} label="Wind Speed" />

      <LineItem value={weather.wind.deg} label="Wind Deg" />
      <LineItem value={weather.wind.gust} label="Wind Gust" />
    </div>
  );
};

export const DisplaySys = ({ weather }: IProps) => {
  return (
    <div>
      <LineItem value={weather.sys.country} label="Country" />
      <LineItem value={weather.sys.sunrise} label="Sunrise" />
      <LineItem value={weather.sys.sunset} label="Sunset" />
    </div>
  );
};

export const DisplayBaseInfo = ({ weather }: IProps) => {
  return (
    <div>
      <LineItem value={weather.timezone} label="Timezone" />
      <LineItem value={weather.id} label="ID" />
      <LineItem value={weather.cod} label="Cod" />
    </div>
  );
};
