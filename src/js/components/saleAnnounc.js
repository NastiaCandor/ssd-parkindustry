import Requests from "../libs/fetchsystem";

let headers;

function saleAnnounc() {
  try {
    headers = {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    };
  } catch {}

  const saleAnnouncContainer = document.querySelector('.sale-announc .container');
  saleAnnouncContainer.addEventListener('click', (e) => {
    const target = e.target;

    // клик по поделиться 
    if (target.closest('.sale-announc__item-share')) {
      const thisUrl = target.closest('.sale-announc__item-share').getAttribute('data-href'),
            thisTitle = target.closest('.sale-announc__item').querySelector('.sale-announc__item-title').textContent.trim();
      if (navigator.share) {
        navigator.share({
          title: thisTitle,
          url: thisUrl
        }).then(() => {
          // alert('Thanks for sharing!');
        })
        .catch(console.error);
      } else {
            // alert('Web Share API не поддерживается');
      }
    }

    // клик сделать объявление любимой
    if (target.closest('.sale-announc__item-fav')) {
      const btn = target.closest('.sale-announc__item-fav');
      if (btn.classList.contains('active')) {
        // TODO: add fetch request
        btn.classList.remove('active');
        const body = {};
        const id = target.closest('.sale-announc__item').getAttribute('data-id');
        Requests.delete(`/favorites/ads/${id}`, body, headers);
      } else {
        // TODO: add fetch request
        btn.classList.add('active');
        const body = {};
        const id = target.closest('.sale-announc__item').getAttribute('data-id');
        Requests.post(`/favorites/ads/${id}`, body, headers);
      }
    }
  });

}

export default saleAnnounc;