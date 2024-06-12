import { Injectable } from '@nestjs/common';

const { log } = console;

@Injectable()
export class LoggerService {
  // Implement logs to send to CloudWatch, Sentry, DataDog, Splunk, or any other logging service
  async error(message, error, payload?) {
    await log({ message, payload, error, type: LogType.ERROR });
  }
  async warn(message, payload) {
    await log({ message, payload, type: LogType.WARN });
  }
  async info(message: string, payload?: any) {
    await log({ message, payload, type: LogType.INFO });
  }
}

export enum LogType {
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}
