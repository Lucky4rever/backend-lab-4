type Icon = 'sunny' | 'cloudy' | 'rainy' | 'other';

const convertToIcon = (icon: string): Icon => {
  switch (icon) {
    case 'sun':
    case 'sunny':
      return 'sunny';
    case 'clouds':
    case 'cvercast clouds':
    case 'cloudy':
      return 'cloudy';
    case 'rain':
    case 'rainy':
      return 'rainy';
    default:
      return 'other';
  }
};

export { type Icon, convertToIcon };
