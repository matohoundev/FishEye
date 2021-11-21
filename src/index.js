import './assets/fonts/DMSans/DMSans-Regular.ttf';
import './assets/fonts/DMSans/DMSans-Medium.ttf';
import './assets/scss/main.scss';
import './data/photographers.json';
import { toggleDropDown } from './scripts/select/select';
import { displayModal, closeModal } from './scripts/form/form';
import { getPhotographers, displayData, init } from './scripts/pages/index';
import {
  photographerFactory,
  getUserCardDOM,
} from './scripts/factories/photographer';
