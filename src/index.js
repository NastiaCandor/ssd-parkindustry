import './style.scss';

import headerSearch from './js/components/headerSearch';
import articlesHeaderForm from './js/components/articlesHeaderForm';
import articles from './js/components/articles';
import burgerMenu from './js/components/burger';

window.addEventListener('DOMContentLoaded', () => {
  try {
    headerSearch();
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

});