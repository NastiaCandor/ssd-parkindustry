import './style.scss';

import headerSearch from './js/components/headerSearch';
import articlesHeaderForm from './js/components/articlesHeaderForm';
import articles from './js/components/articles';

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

});