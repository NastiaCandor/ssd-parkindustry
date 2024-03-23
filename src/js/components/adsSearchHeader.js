import NiceSelect from "../libs/nice-select2";

// Подключение стилизованного селекта к фильтрам статей
function adsSearchForm() {


  try {
  // селект Ищу
  new NiceSelect(document.getElementById('announc-search-form-best'));
  } catch {}

  try {
    // селект Товары
    new NiceSelect(document.getElementById("announc-search-form-category"));
  } catch {}
}

export default adsSearchForm;