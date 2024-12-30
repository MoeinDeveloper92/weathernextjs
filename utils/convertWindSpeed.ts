/**@format */

export function convertWindSpeed(speedInMeterPerSecond: number): string {
  const speedInKilometerPerhour = speedInMeterPerSecond * 3.6;
  return `${speedInKilometerPerhour.toFixed(0)}km/h`;
}
