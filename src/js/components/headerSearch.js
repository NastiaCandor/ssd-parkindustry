// ПОИСК В header
function headerSearch() {
  const searchForm = document.querySelector('.header__search');
  const searchInput = document.querySelector('.header__search-input')
  const logo = document.querySelector('.header__logo');
  // сабмит поиска
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  searchInput.addEventListener('focus', () => {
    searchInput.classList.add('_wide');
    logo.classList.add('_hide');
  });
  searchInput.addEventListener('focusout', () => {
    logo.classList.remove('_hide');
    searchInput.classList.remove('_wide');
  });
}

export default headerSearch;