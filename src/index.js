import './style.scss';

import headerSearch from './js/components/headerSearch';
import articlesHeaderForm from './js/components/articlesHeaderForm';

window.addEventListener('DOMContentLoaded', () => {
  try {
    headerSearch();
  } catch {}
  try {
    articlesHeaderForm();
  } catch {}

});