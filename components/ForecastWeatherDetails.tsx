import React from 'react';
import Container from './Container';
import WeatherIcon from './WeatherIcon';
import WeatherDetails, { WeatherDetailProps } from './WeatherDetails';
import { WeatherForecastResponse } from '@/@types/type';
import { convertCelvinToCelcius } from '@/utils/temeratureConversion';
import { ScrollArea, Scrollbar } from '@radix-ui/react-scroll-area';

export interface ForecastWeatherDetailsProps extends WeatherDetailProps {
  weatherIcon: string;
  date: string;
  day: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

function ForecastWeatherDetails(props: ForecastWeatherDetailsProps) {
  const {
    weatherIcon = '02d',
    date = '19.09',
    day = 'Wednesday',
    temp,
    feels_like,
    temp_min,
    temp_max,
    description,
  } = props;
  return (
    <Container className="gap-4">
      <section className="flex gap-4 items-center px-4 max-sm:px-1">
        <div className="flex flex-col items-center">
          <WeatherIcon iconname={weatherIcon} />
          <p className="font-semibold">{date}</p>
          <p className="text-sm font-semibold">{day}</p>
        </div>
        {/*  */}
        <div className="flex items-center flex-col px-4 max-sm:p-0 max-sm:text-sm">
          <span className="text-7xl max-sm:text-xl font-semibold">
            {convertCelvinToCelcius(temp ?? 0)}°
          </span>
          <p className="text-xs space-x-1 font-semibold whitespace-nowrap">
            <span>Feels Like</span>
            <span>{convertCelvinToCelcius(feels_like ?? 0)}</span>
          </p>
          <p className="capitalize font-semibold">{description}</p>
        </div>
      </section>
      <ScrollArea className="flex flex-1 overflow-x-auto ">
        <section className=" flex justify-between gap-4 w-full pr-10 px-4">
          <WeatherDetails {...props} />
        </section>
        <Scrollbar orientation="horizontal" />
      </ScrollArea>
    </Container>
  );
}

export default ForecastWeatherDetails;
