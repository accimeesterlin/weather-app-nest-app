import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class OpenweatherService {
  constructor(private configService: ConfigService) {}

  async getCoord(lat: string, lon: string) {
    const { data } = await axios(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          lat,
          lon,
          appid: this.configService.get<string>('APP_ID'),
        },
      },
    );
    return data;
  }

  async getForecast(lat: string, lon: string) {
    const { data } = await axios(
      `https://api.openweathermap.org/data/2.5/forecast`,
      {
        params: {
          lat,
          lon,
          appid: this.configService.get<string>('APP_ID'),
        },
      },
    );
    return data;
  }

  async getCity(q: string) {
    try {
      console.log('Loading city: ', q);
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q,
            appid: this.configService.get<string>('APP_ID'),
          },
        },
      );
      return data;
    } catch (error) {
      console.log('Error loading city: ', q);
    }
  }
}
