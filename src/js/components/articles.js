import { _slideToggle } from "../libs/utils";

function articles() {
  const articles = document.querySelectorAll('.articles__item');
  // функуионал каждой статьи
  // articles.forEach((article) => {
  //   article.addEventListener('click', (e) => {
  //     const target = e.target;

  //     // клик по поделиться функционал поделиться
  //     if (target.closest('.articles__item-share')) {
  //       const thisUrl = window.location.href,
  //             thisTitle = document.title;
  //       if (navigator.share) {
  //         navigator.share({
  //           title: thisTitle,
  //           url: thisUrl
  //         }).then(() => {
  //           // alert('Thanks for sharing!');
  //         })
  //         .catch(console.error);
  //       } else {
  //             // alert('Web Share API не поддерживается');
  //       }
  //     }

  //     // клик сделать статью любимой
  //     if (target.closest('.articles__item-fav')) {
  //       const btn = target.closest('.articles__item-fav');
  //       if (btn.classList.contains('active')) {
  //         btn.classList.remove('active');
  //       } else {
  //         btn.classList.add('active');
  //       }
  //     }

  //     // клик по лайку
  //     if (target.closest('.articles__item-stats-like')) {
  //       changeState(target, '.articles__item-stats-like');
  //     }

  //     // клик по дислайку
  //     if (target.closest('.articles__item-stats-dislike')) {
  //       changeState(target, '.articles__item-stats-dislike');
  //     }

  //     // клик по открытию всей статьи
  //     if (target.closest('.articles__item-btn')) {
  //       const btn = target.closest('.articles__item-btn');
  //       const moreContent = article.querySelector('.articles__item-more');
  //       _slideToggle(moreContent, 300);
  //       btn.classList.toggle('active');
  //     }
  //   });
  // });
  const articleContainer = document.querySelector('.articles .container');
  articleContainer.addEventListener('click', (e) => {
    const target = e.target;

    // клик по поделиться функционал поделиться
    if (target.closest('.articles__item-share')) {
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
    if (target.closest('.articles__item-fav')) {
      const btn = target.closest('.articles__item-fav');
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
      } else {
        btn.classList.add('active');
      }
    }

    // клик по лайку
    if (target.closest('.articles__item-stats-like')) {
      changeState(target, '.articles__item-stats-like');
    }

    // клик по дислайку
    if (target.closest('.articles__item-stats-dislike')) {
      changeState(target, '.articles__item-stats-dislike');
    }

    // клик по открытию всей статьи
    if (target.closest('.articles__item-btn')) {
      const btn = target.closest('.articles__item-btn');
      // const moreContent = article.querySelector('.articles__item-more');
      const moreContent = target.closest('.articles__item').querySelector('.articles__item-more');
      _slideToggle(moreContent, 300);
      btn.classList.toggle('active');
    }
  });
}

// Сменить состояние лайка/дислайка
function changeState(elem, statSelector) {
  // иконка лайка/дислайка
  const icon = elem.closest(statSelector);
  // счетчик показателя
  const num = elem.closest('.action-state').querySelector('.action-num');
  // если уже стоит, то убрать
  if (icon.classList.contains('active')) {
    icon.classList.remove('active');
    num.textContent = `${+num.textContent - 1}`;
  } else {
    // если нет, то поставить
    icon.classList.add('active');
    num.textContent = `${+num.textContent + 1}`;
  }
}

export default articles;