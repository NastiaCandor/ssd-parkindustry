import './style.scss';

import headerSearch from './js/components/headerSearch';
import articlesHeaderForm from './js/components/articlesHeaderForm';
import articles from './js/components/articles';
import burgerMenu from './js/components/burger';
import adsSearchForm from './js/components/adsSearchHeader';
import saleAnnounc from './js/components/saleAnnounc';
import favouriteSection from './js/components/favourite';
import profileFunctionality from './js/components/profile';
import sidePanel from './js/components/sidePanel';
import modals from './js/components/modals';

window.addEventListener('DOMContentLoaded', () => {
  try {
    modals();
  } catch {}
  try {
    headerSearch();
  } catch {}
  try {
    sidePanel();
  } catch {}
  try {
    articlesHeaderForm();
  } catch {}
  try {
    articles();
  } catch {}
  try {
    burgerMenu();
  } catch {}
  try {
    adsSearchForm();
  } catch {}
  try {
    saleAnnounc();
  } catch {}
  try {
    favouriteSection();
  } catch {}
  try {
    profileFunctionality();
  } catch {}

});