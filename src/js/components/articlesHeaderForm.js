import NiceSelect from "../libs/nice-select2";

const BEST_SELECT_TITLE = 'Лучшее',
      CATEGORY_SELECT_TITLE = 'Категории';

// Подключение стилизованного селекта к фильтрам статей
function articlesHeaderForm() {
  // селект Лучшее за:
  new NiceSelect(document.getElementById('articles-form-best'));
  // селект Категории:
  new NiceSelect(document.getElementById("articles-form-category"));

  // Вставка названия категории в новый элемент NiceSelects
  const selectBest = document.querySelector('.articles-form__best .nice-select');
  const spanBestTitle =  `
    <span class="articles-form__title txt13reg">${BEST_SELECT_TITLE}</span>
  `;
  selectBest.insertAdjacentHTML('afterbegin', spanBestTitle);

  const selectCategory = document.querySelector('.articles-form__category .nice-select');
  const spanCategoryTitle =  `
    <span class="articles-form__title txt13reg">${CATEGORY_SELECT_TITLE}</span>
  `;
  selectCategory.insertAdjacentHTML('afterbegin', spanCategoryTitle);
}

export default articlesHeaderForm;