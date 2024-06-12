import { Controller, Get, Query } from '@nestjs/common';
import { OpenweatherService } from 'src/openweather/openweather.service';

@Controller('forecast')
export class ForecastController {
  constructor(private openWeatherService: OpenweatherService) {}

  @Get()
  getForecast(@Query('lat') lat: string, @Query('lon') lon: string) {
    return this.openWeatherService.getForecast(lat, lon);
  }
}
