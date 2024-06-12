import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IWeatherData } from "@/types/weather-type";
import {
  DisplayBaseInfo,
  DisplayCoordinates,
  DisplaySys,
  DisplayWeather,
  DisplayWind,
} from "@/WeatherDetail";
import { capitalizeWord } from "./utils/formatUtils";

type IProps = {
  weather: IWeatherData;
};

export function WeatherDetailsModal({ weather }: IProps) {
  let description: string = "";

  if (weather.weather.length > 0) {
    const weatherInfo = weather.weather;
    description = weatherInfo[0].description || "";
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">More Details</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Weather Detail</SheetTitle>
          <SheetDescription>
            <p>More details about the weather in {weather.name}</p>
            <p>{capitalizeWord(description)}</p>
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <DisplayCoordinates weather={weather} />
          <DisplayWeather weather={weather} />
          <DisplayWind weather={weather} />
          <DisplaySys weather={weather} />
          <DisplayBaseInfo weather={weather} />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Close Modal</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
