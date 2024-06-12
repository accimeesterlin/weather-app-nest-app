import { Controller, Get, Query } from '@nestjs/common';
import { OpenweatherService } from 'src/openweather/openweather.service';

@Controller('coord')
export class CoordController {
  constructor(private openWeatherService: OpenweatherService) {}

  @Get()
  getCoord(@Query('lat') lat: string, @Query('lon') lon: string) {
    return this.openWeatherService.getCoord(lat, lon);
  }
}
