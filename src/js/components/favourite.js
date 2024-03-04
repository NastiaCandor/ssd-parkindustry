import ItcTabs from "../libs/tabs";

function favouriteSection() {
// инициализация .tabs как табов
  new ItcTabs('body', {}, 'first-tabs');

  // delete element from favourite
  const deleteBtns = document.querySelectorAll('.fav__delete');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const article = btn.closest('.fav-article');
      const ad = btn.closest('.fav-announc');
      const user = btn.closest('.fav-user');
      // удалить статью
      if (article) {
        // TODO: add fetch
        article.remove();
      }
      // удалить объявление
      if (ad) {
        // TODO: add fetch
        ad.remove();
      }
      // удалить пользователя
      if (user) {
        // TODO: add fetch
        user.remove();
      }
    });
  });


}

export default favouriteSection;