export function convertCelvinToCelcius(
  tempInKelvin: number
): number | undefined {
  const tempInCelcius = tempInKelvin - 273.15;
  return Math.floor(tempInCelcius);
}
