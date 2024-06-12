import * as React from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import axios from "axios";
import { IWeatherData } from "@/types/weather-type";
import { useEffect } from "react";
import { getDailyForecast } from "@/utils/forecastUtils";

const baseUrl = process.env.REACT_APP_OPEN_WEATHER_BASE_URL;

type IProps = {
  lat: number;
  lon: number;
};

export function WeeklyStats({ lat, lon }: IProps) {
  const [weatherList, setWeatherList] = React.useState<IWeatherData[]>([]);

  useEffect(() => {
    searchWeeklyWeather();
  }, []);

  // Search City Forecast
  const searchWeeklyWeather = async () => {
    try {
      const url = `${baseUrl}/api/v1/forecast`;

      const params = {
        lat,
        lon,
      };

      const { data } = await axios(url, {
        params,
      });

      setWeatherList(data.list);

      // setWeather(data);
    } catch (error) {
      // TODO: Handle error
    }
  };

  const dailyWeather: any[] = getDailyForecast(weatherList);

  // Get the highest temperature
  const highestTempMax = Math.max(
    ...dailyWeather.map((weather) => weather.temp_max)
  );

  const temps = dailyWeather.map((weather) => ({ goal: weather.temp_max }));

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Weekly Stats</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Weekly Stats</DrawerTitle>
            <DrawerDescription>
              Get an overview of your weekly weather activity
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {highestTempMax}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  This Week's High
                </div>
              </div>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={temps?.slice(0, 13)}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
