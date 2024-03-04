function saleAnnounc() {
  const saleAnnouncContainer = document.querySelector('.sale-announc .container');
  saleAnnouncContainer.addEventListener('click', (e) => {
    const target = e.target;

    // клик по поделиться 
    if (target.closest('.sale-announc__item-share')) {
      const thisUrl = window.location.href,
            thisTitle = document.title;
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

    // клик сделать статью любимой
    if (target.closest('.sale-announc__item-fav')) {
      const btn = target.closest('.sale-announc__item-fav');
      if (btn.classList.contains('active')) {
        // TODO: add fetch request
        btn.classList.remove('active');
      } else {
        btn.classList.add('active');
      }
    }

  });
}

export default saleAnnounc;