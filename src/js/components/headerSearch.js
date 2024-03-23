// ПОИСК В header
function headerSearch() {
  const searchForms = document.querySelectorAll('.header__search');
  searchForms.forEach(searchForm => {
    const searchInput = searchForm.querySelector('.header__search-input');
    const searchBtn = searchForm.querySelector('button');
    const wrapper = searchForm.closest('.side-panel__header') || searchForm.closest('.header__panel');
    const logo = wrapper.querySelector('.header__logo');
    // сабмит поиска
    searchForm.addEventListener('submit', (e) => {
      if (!searchInput.classList.contains('_wide')) {
        e.preventDefault();
        searchInput.focus();
      }
    });
  
    searchInput.addEventListener('focus', () => {
      searchInput.classList.add('_wide');
      logo.classList.add('_hide');
    });
    searchInput.addEventListener('focusout', (e) => {
      setTimeout(() => {
      logo.classList.remove('_hide');
      searchInput.classList.remove('_wide');
      }, 300)
    });
  })
}

export default headerSearch;