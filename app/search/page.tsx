import React from 'react';
import { fetchWeatherData } from '@/utils/fetchWeatherData';
import { convertCelvinToCelcius } from '@/utils/temeratureConversion';
import { convertWindSpeed } from '@/utils/convertWindSpeed';
import Navbar from '@/components/Navbar';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import Container from '@/components/Container';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { ScrollBar } from '@/components/ui/scroll-area';
import WeatherDetails from '@/components/WeatherDetails';
import { meterToKilometer } from '@/utils/meterToKilometer';
import fromUnixTime from 'date-fns/fromUnixTime';
import ForecastWeatherDetails from '@/components/ForecastWeatherDetails';
import WeatherIcon from '@/components/WeatherIcon';
import { getDayOrNightIcon } from '@/utils/temeratureConversion';
import Link from 'next/link';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const { query } = await searchParams;
  try {
    const data = await fetchWeatherData(query);
    const firstData = data?.list[0];

    const uniqueDates = [
      ...new Set(
        data?.list.map(
          (entry) => new Date(entry.dt * 1000).toISOString().split('T')[0]
        )
      ),
    ];

    //Filtering data to get the first entry after 6Am for each qunique date
    const firstDataForEachDate = uniqueDates.map((date) => {
      return data?.list.find((entry) => {
        const entryDate = new Date(entry.dt * 1000).toISOString().split('T')[0];
        const entryTime = new Date(entry.dt * 1000).getHours();
        return entryDate === date && entryTime >= 6;
      });
    });
    return (
      <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
        <Navbar />
        <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
          {/* Today Data */}
          <section className="space-y-5 w-full">
            <div className="space-y-4">
              <h2 className="flex gap-1 text-2xl items-end">
                <p className="text-xl font-bold">
                  {format(parseISO(firstData?.dt_txt ?? '12/31/2024'), 'EEEE')}
                </p>
                <p className="text-lg font-semibold">
                  ({format(parseISO(firstData?.dt_txt ?? '12/31/2024'), 'dd.MM.yyyy')})
                </p>
              </h2>
              <Container className="px-6 items-center">
                <div className="flex flex-col px-4">
                  <span className="text-5xl max-sm:text-3xl text-center">
                    {convertCelvinToCelcius(firstData?.main.temp ?? 296.37)}°
                  </span>
                  <p className="text-xs space-x-1 whitespace-nowrap font-semibold">
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
                      ↑°
                      {convertCelvinToCelcius(firstData?.main.temp_max ?? 0)}
                    </span>
                  </p>
                </div>
                {/* Items and weather icons */}
                <ScrollArea className="overflow-x-auto">
                  <div className="flex gap-2 ">
                    {data?.list.map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-col pb-4 justify-between items-center gap-2 text-xs"
                      >
                        <p className=" whitespace-nowrap">
                          {format(parseISO(item.dt_txt), 'h:mm a')}
                        </p>
                        <WeatherIcon
                          iconname={getDayOrNightIcon(
                            item.weather[0].icon,
                            item.dt_txt
                          )}
                        />
                        <p className="text-lg font-semibold">
                          {convertCelvinToCelcius(item.main.temp ?? 0)}°
                        </p>
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </Container>
            </div>
            {/* Second Block */}
            <div className="flex ">
              {/* LEft */}
              <div className=" justify-center bg-white rounded-lg flex-col flex px-4 items-center">
                <p className=" whitespace-nowrap capitalize  font-semibold">
                  {firstData?.weather[0].description}
                </p>
                <WeatherIcon
                  iconname={getDayOrNightIcon(
                    firstData?.weather[0].icon ?? '',
                    firstData?.dt_txt ?? ''
                  )}
                />
              </div>
              {/* RIGHT */}
              <Container className="bg-yellow-300/80  px-6 ml-2 max-sm:overflow-x-auto">
                <ScrollArea className="flex-1">
                  <div className="px-6">
                    <WeatherDetails
                      airPressure={`${firstData?.main.pressure} hpa`}
                      visablity={meterToKilometer(
                        firstData?.visibility ?? 10000
                      )}
                      humidity={`${firstData?.main.humidity}%`}
                      sunrise={format(
                        fromUnixTime(data?.city.sunrise ?? 123123),
                        'H:mm'
                      )}
                      sunset={format(
                        fromUnixTime(data?.city.sunset ?? 123123),
                        'H:mm'
                      )}
                      windSpeed={convertWindSpeed(
                        firstData?.wind.speed ?? 1.64
                      )}
                    />
                    <ScrollBar orientation="horizontal" />
                  </div>
                </ScrollArea>
              </Container>
            </div>
          </section>
          {/* Forecasted Data */}
          <section className="flex w-full flex-col gap-4">
            <p className="text-2xl">ForeCast (7 days)</p>
            {firstDataForEachDate.map((d, i) => (
              <ForecastWeatherDetails
                key={i}
                description={d?.weather[0].description ?? ''}
                weatherIcon={d?.weather[0].icon ?? '01d'}
                date={format(parseISO(d?.dt_txt ?? ''), 'dd.MM')}
                day={format(parseISO(d?.dt_txt ?? ''), 'EEEE')}
                feels_like={d?.main.feels_like ?? 0}
                temp={d?.main.temp ?? 0}
                temp_max={d?.main.temp_max ?? 0}
                temp_min={d?.main.temp_min ?? 0}
                airPressure={`${d?.main.pressure}hpa`}
                humidity={`${d?.main.humidity}%`}
                sunrise={format(
                  fromUnixTime(data?.city.sunrise ?? 1702517657),
                  'H:mm'
                )}
                sunset={format(
                  fromUnixTime(data?.city.sunset ?? 1702517657),
                  'H:mm'
                )}
                visablity={`${meterToKilometer(d?.visibility ?? 10000)}`}
                windSpeed={`${convertWindSpeed(d?.wind.speed ?? 1.64)}`}
              />
            ))}
          </section>
        </main>
      </div>
    );
  } catch (error) {
    return (
      <section className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-3xl md:text-7xl animate-bounce">
            Please type a correct City!
          </h1>
          <Link
            className="border px-5 rounded-md py-2 bg-black text-white"
            href={'/'}
          >
            Back
          </Link>
        </div>
      </section>
    );
  }
};

export default page;
