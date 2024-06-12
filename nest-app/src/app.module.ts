import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CityController } from './city/city.controller';
import { ForecastController } from './forecast/forecast.controller';
import { CoordController } from './coord/coord.controller';
import { OpenweatherService } from './openweather/openweather.service';
import { ConfigModule } from '@nestjs/config';
import { LoggerService } from './logger/logger.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'build'),
      // exclude: ['/api*'],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [CityController, ForecastController, CoordController],
  providers: [OpenweatherService, LoggerService],
})
export class AppModule {}
