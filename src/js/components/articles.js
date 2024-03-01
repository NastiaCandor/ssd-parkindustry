import { _slideToggle } from "../libs/utils";

function articles() {
  const articleContainer = document.querySelector('.articles .container');
  articleContainer.addEventListener('click', (e) => {
    const target = e.target;

    // клик по поделиться 
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

    // клик по лайку статьи
    if (target.closest('.articles__item-stats-like')) {
      changeState(target, '.articles__item-stats-like');
    }

    // клик по дислайку статьи
    if (target.closest('.articles__item-stats-dislike')) {
      changeState(target, '.articles__item-stats-dislike');
    }

    // клик по открытию всей статьи
    if (target.closest('.articles__item-btn')) {
      const btn = target.closest('.articles__item-btn');
      const moreContent = target.closest('.articles__item').querySelector('.articles__item-more');
      // показать конетн статьи
      _slideToggle(moreContent, 300);
      btn.classList.toggle('active');
      // показать хедер комментариев
      const comments = target.closest('.articles__item').querySelector('.articles__item-comments');
      _slideToggle(comments, 300);
    }

    // клик по лайку комментария
    if (target.closest('.comment__bottom-stats-like')) {
      changeState(target, '.comment__bottom-stats-like');
    }

    // клик по дислайку комментария
    if (target.closest('.comment__bottom-stats-dislike')) {
      changeState(target, '.comment__bottom-stats-dislike');
    }

    // клик показать комментарии
    if (target.closest('.articles__item-comments-header')) {
      const commentsList = target.closest('.articles__item-comments').querySelector('.articles__item-comments-more');
      // добавить класс для смены положения стрелки
      target.closest('.articles__item-comments-header').classList.toggle('active');
      // показать список комментариев
      _slideToggle(commentsList, 200);
    }

    // клик по ответу на комментарий
    if (target.closest('.comment__btn-respond')) {
      const reply = target.closest('.comment-thread').querySelector('.comment__input-reply');
      _slideToggle(reply, 200);
    }

  });

  // подключение функционала отправки комментарией
  sendComment();
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

// отправка комментариев
function sendComment() {
  // все формы отправки комментариев
  const replayForms = document.querySelectorAll('.leave-comment');
  replayForms.forEach((form) => {
    commentFormFunctionality(form);
  });
}

// функционал отправления комментариев к статье и другим комментариям
function commentFormFunctionality(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // текст комментария
    const text = form.querySelector('input').value;
    if (!text) return;

    // TODO: add fetch to send a comment

    // if succesfull
    const userName = 'USER NAME';
    const userAvatarSRC = 'assets/images/avatar_1.png';
    const commentThread = document.createElement('div');
    commentThread.classList.add('comment-thread');
    commentThread.innerHTML = `
    <div class="comment">
      <div class="comment__header">
        <div class="comment__avatar">
          <img src="${userAvatarSRC}" alt="">
        </div>
        <p class="comment__user-name txt14medium">${userName}</p>
      </div>
      <p class="comment__text txt13reg">
        ${text}
      </p>
      <div class="comment__bottom">
        <div class="comment__bottom-stats-item action-state">
          <div class="comment__bottom-stats-like action-like">
            <svg class="icon" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.558 16.9191C10.252 17.027 9.748 17.027 9.442 16.9191C6.832 16.0292 1 12.3169 1 6.02472C1 3.24719 3.241 1 6.004 1C7.642 1 9.091 1.79101 10 3.01348C10.909 1.79101 12.367 1 13.996 1C16.759 1 19 3.24719 19 6.02472C19 12.3169 13.168 16.0292 10.558 16.9191Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <p class="comment__bottom-stats-num txt12medium action-num">0</p>
        </div>
        <div class="comment__bottom-stats-item action-state">
          <div class="comment__bottom-stats-dislike action-dislike">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="opposite" d="M4.58249 13.1251C2.92499 11.5726 1.5 9.3601 1.5 6.5101C1.5 4.1926 3.3675 2.31763 5.67 2.31763C7.035 2.31763 8.2425 2.97762 9 3.99762C9.7575 2.97762 10.9725 2.31763 12.33 2.31763C13.1925 2.31763 13.995 2.5801 14.6625 3.0376" fill="#fff"></path>
              <path d="M4.58249 13.1251C2.92499 11.5726 1.5 9.3601 1.5 6.5101C1.5 4.1926 3.3675 2.31763 5.67 2.31763C7.035 2.31763 8.2425 2.97762 9 3.99762C9.7575 2.97762 10.9725 2.31763 12.33 2.31763C13.1925 2.31763 13.995 2.5801 14.6625 3.0376" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path class="opposite" d="M16.3051 5.25012C16.4326 5.64762 16.5001 6.07512 16.5001 6.51762C16.5001 11.7676 11.6401 14.8651 9.46512 15.6151C9.21012 15.7051 8.79013 15.7051 8.53513 15.6151C8.04763 15.4501 7.43264 15.1651 6.76514 14.7676" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M16.5 1.49988L1.5 16.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
          </div>
          <p class="comment__bottom-stats-num txt12medium  action-num">0</p>
        </div>
        <button class="comment__btn-respond txt12medium">Ответить</button>
        <button class="comment__btn-complain txt12reg">Пожаловаться</button>
      </div>
    </div>
    <div class="comment__input-reply" hidden="">
      <form action="" class="leave-comment txt13medium">
        <input type="text" class="leave-comment__input" placeholder="Комментарий" wfd-id="id3">
        <button class="btn-square leave-comment__btn"></button>
      </form>
    </div>
    `;
    // если это ответ на чей-то комментарий
    if (form.closest('.comment-thread')) {
      commentThread.classList.add('comment_replay');
      const replyComment = form.closest('.comment-thread');
      // добавить комментарий в конец
      replyComment.append(commentThread);
      // скрыть форму коментария
      _slideToggle(form.closest('.comment__input-reply'), 300);
    }
    // если ответ на статью
    if (form.classList.contains('article-comment')) {
      const list = form.closest('.articles__item-comments-more').querySelector('.comment-list');
      // добавить комментарий в начало списка
      list.prepend(commentThread);
    }

    // подключть к прослушиванию новую форму оставления комментария
    commentFormFunctionality(commentThread.querySelector('.leave-comment'));
    // очистка формы
    form.reset();
  });
}

export default articles;