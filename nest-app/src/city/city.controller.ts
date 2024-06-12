import { Controller, Get, Query } from '@nestjs/common';
import { OpenweatherService } from 'src/openweather/openweather.service';

@Controller('city')
export class CityController {
  constructor(private openWeatherService: OpenweatherService) {}

  @Get('')
  getCity(@Query('q') q: string) {
    return this.openWeatherService.getCity(q);
  }
}
