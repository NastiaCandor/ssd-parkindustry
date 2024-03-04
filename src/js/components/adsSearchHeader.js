import NiceSelect from "../libs/nice-select2";

// Подключение стилизованного селекта к фильтрам статей
function adsSearchForm() {
  // селект Ищу
  new NiceSelect(document.getElementById('ads-search-form-best'));
  // селект Товары
  new NiceSelect(document.getElementById("ads-search-form-category"));

}

export default adsSearchForm;