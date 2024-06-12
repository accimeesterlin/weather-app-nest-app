import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { LoggerService } from 'src/logger/logger.service';

const baseUrl = 'https://api.openweathermap.org/data/2.5';

@Injectable()
export class OpenweatherService {
  constructor(
    private configService: ConfigService,
    private logService: LoggerService,
  ) {}

  async getCoord(lat: string, lon: string) {
    try {
      const params = {
        lat,
        lon,
        appid: this.configService.get<string>('APP_ID'),
      };
      const { data } = await axios(`${baseUrl}/weather`, {
        params,
      });
      return data;
    } catch (error) {
      this.logService.error('Error loading coordinates', error);
    }
  }

  async getForecast(lat: string, lon: string) {
    try {
      const params = {
        lat,
        lon,
        appid: this.configService.get<string>('APP_ID'),
      };

      const { data } = await axios(`${baseUrl}/forecast`, {
        params,
      });
      return data;
    } catch (error) {
      this.logService.error('Error loading forecast', error);
    }
  }

  async getCity(q: string) {
    try {
      const params = {
        q,
        appid: this.configService.get<string>('APP_ID'),
      };

      const { data } = await axios(`${baseUrl}/weather`, {
        params,
      });
      return data;
    } catch (error) {
      this.logService.error('Error loading city', error);
    }
  }
}
