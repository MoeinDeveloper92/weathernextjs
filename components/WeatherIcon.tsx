import React from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';

function WeatherIcon(
  props: React.HTMLProps<HTMLDivElement> & { iconname: string }
) {
  return (
    <div {...props} className={cn('relative h-20 w-20')}>
      <Image
        src={`https://openweathermap.org/img/wn/${props.iconname}@4x.png`}
        width={100}
        height={100}
        className=" absolute h-full w-full"
        alt="Sun Icon"
      />
    </div>
  );
}

export default WeatherIcon;
