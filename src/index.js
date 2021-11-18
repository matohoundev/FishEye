import './assets/fonts/DMSans/DMSans-Regular.ttf';
import './assets/fonts/DMSans/DMSans-Medium.ttf';
import './data/photographers.json';
import { toggleDropDown } from './scripts/select/select';
import { getPhotographers, displayData, init } from './scripts/pages/index';
import {
  photographerFactory,
  getUserCardDOM,
} from './scripts/factories/photographer';
import './assets/scss/main.scss';
