# Weather App

A simple weather app that provides current weather information.

## Features

- Display current weather conditions
- Show temperature, humidity, and wind speed
- Search for weather by location

## Technologies Used

- NestJS
- React
- Nodejs
- JavaScript
- OpenWeatherMap API

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/weather-app.git`
2. Open the project in your preferred code editor.
3. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/).
4. Create two `.env` files in the following locations, using the examples provided in `.env-example` for each respective folder:

   - `client > .env`
   - `nest-app > .env`

5. Replace the placeholder `APP_ID` with your own open weather key and `REACT_APP_OPEN_WEATHER_BASE_URL` to the nest-app server (ex. http://localhost:3001)

### Install Dependencies and Build the Project

In the root directory of the folder (e.g., the root of `weather-app`), run the following commands to install the necessary dependencies and build both the client and the NestJS application:

```bash
npm install
npm run build
```

### Start the Development Server

After the build process is complete, start the development server with the following command:

```bash
npm run dev
```

## Usage

- Enter a location in the search bar to get the current weather information for that location.
- The app will display the temperature, humidity, and wind speed for the selected location.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
