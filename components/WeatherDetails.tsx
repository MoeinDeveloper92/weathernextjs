import React from 'react';
import { LuEye, LuSunrise, LuSunset } from 'react-icons/lu';
import { FiDroplet } from 'react-icons/fi';
import { MdAir } from 'react-icons/md';
import { ImMeter } from 'react-icons/im';
import { FaDroplet } from 'react-icons/fa6';

export interface WeatherDetailProps {
  visablity: string;
  humidity: string;
  windSpeed: string;
  airPressure: string;
  sunrise: string;
  sunset: string;
}
function WeatherDetails(props: WeatherDetailProps) {
  const {
    visablity = '25km',
    humidity = '61%',
    windSpeed = '7 km/h',
    airPressure = '1012 hPa',
    sunrise = '6.20',
    sunset = '18:48',
  } = props;
  return (
    <>
      <SingleWeatherDetails
        information="Visiblity"
        icon={<LuEye />}
        value={visablity}
      />
      <SingleWeatherDetails
        information="Humidity"
        icon={<FiDroplet />}
        value={humidity}
      />
      <SingleWeatherDetails
        information="Wind Speed"
        icon={<MdAir />}
        value={windSpeed}
      />
      <SingleWeatherDetails
        information="Air Pressure"
        icon={<ImMeter />}
        value={airPressure}
      />
      <SingleWeatherDetails
        information="Sunrise"
        icon={<LuSunrise />}
        value={sunrise}
      />
      <SingleWeatherDetails
        information="Sunset"
        icon={<LuSunset />}
        value={sunset}
      />
    </>
  );
}

export interface SingleWeatherDetailProp {
  information: string;
  icon: React.ReactNode;
  value: string;
}

function SingleWeatherDetails(props: SingleWeatherDetailProp) {
  return (
    <div className="flex flex-col gap-2 items-center text-xs font-semibold text-black/80 justify-center">
      <p className="whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  );
}

export default WeatherDetails;
