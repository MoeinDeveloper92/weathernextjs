export function convertCelvinToCelcius(
  tempInKelvin: number
): number | undefined {
  const tempInCelcius = tempInKelvin - 273.15;
  return Math.floor(tempInCelcius);
}

export function getDayOrNightIcon(
  iconName: string,
  dateTimeString: string
): string {
  const hours = new Date(dateTimeString).getHours();
  const isDayTime = hours >= 6 && hours < 18;
  return isDayTime ? iconName.replace(/.$/, 'd') : iconName.replace(/.$/, 'n');
}
