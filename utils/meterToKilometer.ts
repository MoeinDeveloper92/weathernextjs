export function meterToKilometer(visablityToMeter: number): string {
  const visablityToKm = visablityToMeter / 1000;
  return `${visablityToKm.toFixed(2)}`;
}
