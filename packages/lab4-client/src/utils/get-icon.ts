import { Icon } from "../types/icon.type";

function getIcon(iconType: Icon) {
  switch (iconType) {
    case 'sunny':
      return '/icons/sunny.gif';
    case 'cloudy':
      return '/icons/cloudy.gif';
    case 'rainy':
      return '/icons/rainy.gif';
    default:
      return '';
  }
}

export default getIcon;
