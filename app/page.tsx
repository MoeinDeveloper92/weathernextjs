import React from 'react';
import Navbar from '@/components/Navbar';
import { fetchWeatherData } from '@/utils/fetchWeatherData';
import parseISO from 'date-fns/parseISO';
import { format } from 'date-fns';
import Container from '@/components/Container';
import { convertCelvinToCelcius } from '@/utils/temeratureConversion';
const page = async () => {
  const data = await fetchWeatherData();
  const firstData = data?.list[0];

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
        {/* Today Data */}
        <section className="space-y-5">
          <div className="space-y-4">
            <h2 className="flex gap-1 text-2xl items-end">
              <p className="text-xl">
                {format(parseISO(firstData?.dt_txt ?? ''), 'EEEE')}
              </p>
              <p className="text-lg">
                ({format(parseISO(firstData?.dt_txt ?? ''), 'dd.MM.yyyy')})
              </p>
            </h2>
            <Container className="gap-10 px-6 items-center">
              <div className="flex flex-col px-4">
                <span className="text-5xl">
                  {convertCelvinToCelcius(firstData?.main.temp ?? 296.37)}°
                </span>
                <p className="text-xs space-x-1 whitespace-nowrap">
                  <span>Feels Like </span>
                  <span>
                    {convertCelvinToCelcius(firstData?.main.feels_like ?? 0)}°
                  </span>
                </p>
                <p className="text-xs space-x-2 ">
                  <span>
                    ↓° {convertCelvinToCelcius(firstData?.main.temp_min ?? 0)}
                  </span>
                  <span>
                    ↑°{convertCelvinToCelcius(firstData?.main.temp_max ?? 0)}
                  </span>
                </p>
              </div>
              {/* Items and weather icons */}
              <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between">
                {data?.list.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-between items-center gap-2 text-xs"
                  >
                    <p className=" whitespace-nowrap">
                      {format(parseISO(item.dt_txt), 'h:mm a')}
                    </p>
                    <p>{convertCelvinToCelcius(item.main.temp ?? 0)}°</p>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </section>
        {/* Forecasted Data */}
        <section></section>
      </main>
    </div>
  );
};

export default page;
