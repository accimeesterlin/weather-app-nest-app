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

type IProps = {
  weather: IWeatherData;
};

export function WeatherDetailsModal({ weather }: IProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">More Details</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Weather Detail</SheetTitle>
          <SheetDescription>
            More details about the weather in {weather.name}
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
