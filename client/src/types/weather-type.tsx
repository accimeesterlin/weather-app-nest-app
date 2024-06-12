import { z } from "zod";

const weatherData = z.object({
  coord: z.object({
    lon: z.number().optional(),
    lat: z.number().optional(),
  }),
  weather: z.array(
    z.object({
      id: z.number().optional(),
      main: z.string().optional(),
      description: z.string().optional(),
      icon: z.string().optional(),
    })
  ),
  base: z.string().optional(),
  main: z.object({
    temp: z.number().optional(),
    feels_like: z.number().optional(),
    temp_min: z.number().optional(),
    temp_max: z.number().optional(),
    pressure: z.number().optional(),
    humidity: z.number().optional(),
  }),
  visibility: z.number().optional(),
  wind: z.object({
    speed: z.number().optional(),
    deg: z.number().optional(),
    gust: z.number().optional(),
  }),
  clouds: z.object({
    all: z.number().optional(),
  }),
  dt: z.number().optional(),
  sys: z.object({
    type: z.number().optional(),
    id: z.number().optional(),
    country: z.string().optional(),
    sunrise: z.number().optional(),
    sunset: z.number().optional(),
  }),
  timezone: z.number().optional(),
  id: z.number().optional(),
  name: z.string().optional(),
  cod: z.number().optional(),
});

export type IWeatherData = z.infer<typeof weatherData>;
