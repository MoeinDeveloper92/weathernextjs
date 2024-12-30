export interface WeatherForecastResponse {
  cod: string; // Response code
  message: number; // Internal parameter
  cnt: number; // Number of forecast items returned
  list: {
    dt: number; // Forecast time (UNIX timestamp)
    main: {
      temp: number; // Current temperature
      feels_like: number; // Human-perceived temperature
      temp_min: number; // Minimum temperature
      temp_max: number; // Maximum temperature
      pressure: number; // Atmospheric pressure
      sea_level: number; // Atmospheric pressure at sea level
      grnd_level: number; // Atmospheric pressure at ground level
      humidity: number; // Humidity percentage
      temp_kf: number; // Temperature correction factor
    };
    weather: {
      id: number; // Weather condition ID
      main: string; // Group of weather parameters (e.g., Rain, Snow, Clear)
      description: string; // Weather condition within the group
      icon: string; // Icon code for weather condition
    }[];
    clouds: {
      all: number; // Cloudiness percentage
    };
    wind: {
      speed: number; // Wind speed
      deg: number; // Wind direction in degrees
      gust: number; // Wind gust speed
    };
    visibility: number; // Visibility in meters
    pop: number; // Probability of precipitation
    sys: {
      pod: string; // Part of the day ("n" for night, "d" for day)
    };
    dt_txt: string; // Date and time of forecast (in ISO format)
  }[];
  city: {
    id: number; // City ID
    name: string; // City name
    coord: {
      lat: number; // Latitude
      lon: number; // Longitude
    };
    country: string; // Country code
    population: number; // Population of the city
    timezone: number; // Timezone offset in seconds
    sunrise: number; // Sunrise time (UNIX timestamp)
    sunset: number; // Sunset time (UNIX timestamp)
  };
}
