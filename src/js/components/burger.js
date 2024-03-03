function burgerMenu() {
  const hamburger = document.querySelector('[data-burger="open"]');
  const burgerMenu = document.querySelector('.side-panel__wrapper');
  const hamburgerClose = document.querySelector('[data-burger="close"]');
  
  function closeBurgerMenu() {
    burgerMenu.classList.remove('active');
  };
  
  function openBurgerMenu() {
    burgerMenu.classList.add('active');
  };
  
  hamburger.addEventListener('click', openBurgerMenu);
  
  hamburgerClose.addEventListener('click', closeBurgerMenu);

}

export default burgerMenu;