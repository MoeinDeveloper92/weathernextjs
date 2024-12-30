import { WeatherForecastResponse } from '@/@types/type';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const url = process.env.NEXT_PUBLIC_WEATHER_ENDPOINT;

export const fetchWeatherData = async (): Promise<
  WeatherForecastResponse | undefined
> => {
  try {
    const res = await fetch(url + `?q=Tehran,ir&appid=${API_KEY}&cnt=2`);

    if (res.status == 200) {
      const data: WeatherForecastResponse = await res.json();
      return data;
    }
  } catch (error) {
    console.error('SImething went wront', error);
  }
};
