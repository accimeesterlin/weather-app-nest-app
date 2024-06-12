export function getDailyForecast(list: any) {
  // Convert Unix timestamp to date
  const unixToDate = (unixTimestamp: any) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toISOString().split("T")[0];
  };

  // Initialize a dictionary to store daily data
  const dailyData: any = {};

  // Process each entry in the list
  list.forEach((entry: any) => {
    const date = unixToDate(entry.dt);
    const temp = entry.main.temp;

    if (!dailyData[date]) {
      dailyData[date] = {
        temp_min: Infinity,
        temp_max: -Infinity,
        temp_sum: 0,
        count: 0,
        weather: [],
      };
    }

    dailyData[date].temp_min = Math.min(
      dailyData[date].temp_min,
      entry.main.temp_min
    );
    dailyData[date].temp_max = Math.max(
      dailyData[date].temp_max,
      entry.main.temp_max
    );
    dailyData[date].temp_sum += temp;
    dailyData[date].count += 1;
    dailyData[date].weather.push(entry.weather[0].main);
  });

  // Calculate the daily forecast
  const dailyForecast = Object.keys(dailyData).map((date) => {
    const info = dailyData[date];
    const avgTemp = info.temp_sum / info.count;
    const weatherSummary = info.weather
      .sort(
        (a: any, b: any) =>
          info.weather.filter((v: any) => v === a).length -
          info.weather.filter((v: any) => v === b).length
      )
      .pop();

    return {
      date: date,
      temp_min: info.temp_min,
      tem: info.temp,
      temp_max: info.temp_max,
      temp_avg: avgTemp,
      weather: weatherSummary,
    };
  });

  return dailyForecast;
}
