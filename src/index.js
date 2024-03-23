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
  try {
    // время публикации
    const timeItems = document.querySelectorAll('[data-created-time]');
    timeItems.forEach(item => {
      const date = item.getAttribute('data-created-time');
      if (date.length > 4) {
        const time = date.split(' ')[1].slice(0, 5);
        const fullDate = date.split(' ')[0].split('-');
        const [year, month, day] = fullDate;
        const dataPars = `${day}.${month}.${year.slice(2,5)} <span> в </span>${time}`;
        item.innerHTML = dataPars;
      } else {
        item.innerHTML = '';
      }
    });
  } catch {}

});