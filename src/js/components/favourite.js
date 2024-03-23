import ItcTabs from "../libs/tabs";
import Requests from "../libs/fetchsystem";

let headers;

function favouriteSection() {
  headers = {
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    // 'Content-Type': 'application/x-www-form-urlencoded',
  };

  if (document.querySelector('.fav')) {
    document.body.classList.add('fav-body');
  }

// инициализация .tabs как табов
  new ItcTabs('.fav-body', {}, 'first-tabs');

  // delete element from favourite
  const deleteBtns = document.querySelectorAll('.fav__delete');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const article = btn.closest('.fav-article');
      const ad = btn.closest('.fav-announc');
      const user = btn.closest('.fav-user');
      // удалить статью
      if (article) {
        article.remove();
        // TODO: add fetch
        const id = btn.getAttribute('data-id');
        Requests.delete(` /favorites/articles/${id}`, {}, headers);
      }
      // удалить объявление
      if (ad) {
        ad.remove();
        // TODO: add fetch
        const id = btn.getAttribute('data-id');
        Requests.delete(` /favorites/ads/${id}`, {}, headers);
      }
      // удалить пользователя
      if (user) {
        // TODO: add fetch
        const id = btn.getAttribute('data-id');
        Requests.delete(` /favorites/profiles/${id}`, {}, headers);
      }
    });
  });

}

export default favouriteSection;