import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import ItcTabs from "../libs/tabs";
import IMask from 'imask';

function profileFunctionality() {
  // инициализация .tabs как табов
  new ItcTabs('.profile-body', {}, 'second-tabs');

  // слайдер изображений
  const imgsSwiper = new Swiper('.profile-imgs__swiper', {
    speed: 400,
    slidesPerView: 1.6,
  });

  // удаление объявлений и статей


  // если это страница самого пользователя
  if (document.querySelector('.my-profile')) {

    // клик по поделиться
    const shareBtn = document.querySelector('.user-profile-share');
    shareBtn.addEventListener('click', () => {
      const thisUrl = shareBtn.getAttribute('data-href'),
            thisTitle = shareBtn.closest('.profile__user').querySelector('.user-block__name').textContent.trim();

      shareItem(thisUrl, thisTitle);
    });

    uploadAvatar();

    editContactsFunctionality();

    addTelMasks();

    settingsFunctionality();

    myProfileSlider(imgsSwiper);

    deleteMyPublication();

    editProfileName();
  } else {
    // если страница другого пользователя
    // клик по поделиться
    const shareBtn = document.querySelector('.user-profile-share');
    shareBtn.addEventListener('click', () => {
      const thisUrl = window.location.href,
            thisTitle = document.title;

      shareItem(thisUrl, thisTitle);
    });

    userArticles();
    userSales();
    userFavourite();
    shareContacts();
  }
}

function editProfileName() {
  const name = document.querySelector('.profile-name');
  name.addEventListener('change', () => {
    // TODO: add fetch to change profile name
    const newName = name.value;
  });
}

function uploadAvatar() {
  const input = document.querySelector('.profile__user-avatar-input');
  const avatar = document.querySelector('.profile__user-avatar');
  input.addEventListener('change', (e) => {
    const files = e.target.files;
    if (files.length === 0) return;
    // TODO: add fetch to upload img

    // загрузка фото
    const reader = new FileReader();
    
    reader.onload = function(e) {

      avatar.setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(files[0]);
  });
}

// редактирование контактов пользователя
function editContactsFunctionality() {
  const editBtns = document.querySelectorAll('.contact-edit');
  editBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = btn.closest('.user-contact__field').querySelector('.user-contact__input');
      // если инпут уже в режиме редактирования -> сохранить и перевести в другой режим
      if (btn.classList.contains('_edit')) {
        // если редактирование номера, надо проверить заполнение
        if ((btn.closest('.user-contacts_tel')) && (input.value.match(/\d/g).length < 11)) return;
        input.setAttribute('readonly', '');
        input.classList.remove('_edit');
        btn.classList.remove('_edit');
        // TODO: add fetch to save number
      } else {
        input.removeAttribute('readonly');
        input.classList.add('_edit');
        btn.classList.add('_edit');
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      }
    });
  });
}

// маски на телефон
function addTelMasks() {
  const tel = document.getElementById('user-tel');
  const whatsAppTel = document.getElementById('user-whatsapp');
  const maskOptions = {
    mask: '+7 000 000 00 00',
    lazy: false
  };
  new IMask(tel, maskOptions);
  new IMask(whatsAppTel, maskOptions);
}

// настройки уведомлений в профиле 
function settingsFunctionality() {
  const settingInputs = document.querySelectorAll('.settings-item__input');
  settingInputs.forEach((input) => {
    // id инпута
    const inputID = input.id;
    input.addEventListener('change', (e) => {
      // если включили уведомление
      if (input.checked) {
        // TODO: add fetch to turn ON notification
      } else {
        // если выключили уведомление
        // TODO: add fetch turn OFF
      }
    })
  });
}

// слайдер в профиле пользователя
function myProfileSlider(imgsSwiper) {
    // добавление фото в слайдер
    const addBtn = document.querySelector('.profile-imgs__add');
    const addSlide = document.querySelector('.slide-add');
    addBtn.addEventListener('change', addImg);
  
    function addImg(e) {
      const files = e.target.files;
      if (files.length === 0) return;
  
      // TODO: add fetch to upload img
  
      // загрузка фото
      const reader = new FileReader();
      
      reader.onload = function(e) {
        const imgSlideTemplate = `
        <div class="swiper-slide">
          <div class="profile-imgs__slide">
            <div class="profile-imgs__img">
              <img src="${e.target.result}" alt="">
            </div>
            <div class="profile-imgs__delete">
              <img src="./assets/images/trash-icon.svg" alt="">
            </div>
          </div>
        </div>
      `;
      // добавление фото в слайдер
      imgsSwiper.appendSlide([imgSlideTemplate]);
      // перемещение слайда с функциоей добавления файла, а именно удалить его и снова добавить в конец
      addSlide.remove();
      imgsSwiper.appendSlide(addSlide);
      // переместить слайдер на добавленный слайд
      const index = imgsSwiper.activeIndex + 1;
      imgsSwiper.slideTo(index);
      }
  
      reader.readAsDataURL(files[0]);
    }

    // удаление фото в слайдере
    document.querySelector('.profile-imgs__swiper').addEventListener('click', (e) => {
      const target = e.target;
      // TODO: add fetch to delete img
      if (target.closest('.profile-imgs__delete')) {
        target.closest('.swiper-slide').remove();
        imgsSwiper.update();
      }
    });
}

// удалить мои публикации
function deleteMyPublication() {
  // удаление статьи
  const articleBtns = document.querySelectorAll('.my-article__delete');
  articleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.profile-gen__article');
      item.remove();
      // TODO: add fetch to delete article
    });
  });
  // удаление объявления
  const announcBtns = document.querySelectorAll('.my-announc__delete');
  announcBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.sale-announc__item');
      item.remove();
      // TODO: add fetch to delete announcment
    });
  });
}

// статьи в чужом профиле
function userArticles() {
  const shareArticlesBtns = document.querySelectorAll('.user-article-share');
  // поделиться статьей
  shareArticlesBtns.forEach(btn => {
    const item = btn.closest('.user-article');
    btn.addEventListener('click', () => {
      const href = item.querySelector('.user-article__body').href;
      const title = item.querySelector('.fav-article__body-title').textContent.trim();
      shareItem(href, title);
    });
  });
  // отметить как любимую статью
  const favArticleBtns = document.querySelectorAll('.user-article-fav');
  favArticleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) {
        // TODO: add fetch to remove article from favourite
        btn.classList.remove('active');
      } else {
        // TODO: add fetch to add article from favourite
        btn.classList.add('active');
      }
    });
  });
}

// объявления в чужом профиле
function userSales() {
  // поделиться объявлением
  const shareSaleBtns = document.querySelectorAll('.user-sale-share');
  shareSaleBtns.forEach(btn => {
    const item = btn.closest('.sale-announc__item');
    btn.addEventListener('click', () => {
      const href = item.querySelector('.sale-announc__item-img').href;
      const title = item.querySelector('.sale-announc__item-title').textContent.trim();
      shareItem(href, title);
    });
  });
  // отметить объявление как любимое
  const favSaleBtns = document.querySelectorAll('.user-sale-fav');
  favSaleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) {
        // TODO: add fetch to remove sale from favourite
        btn.classList.remove('active');
      } else {
        // TODO: add fetch to add sale from favourite
        btn.classList.add('active');
      }
    });
  });
}

// отметить в профиле другого пользователя его как любимый
function userFavourite() {
  const fav = document.querySelector('.user-profile-fav');
  fav.addEventListener('click', () => {
    if (fav.classList.contains('active')) {
      // TODO: add fetch to remove user from favourite
      fav.classList.remove('active');
    } else {
      // TODO: add fetch to add user from favourite
      fav.classList.add('active');
    }
  });
}

// поделиться реквизитами другого пользователя
function shareContacts() {
  const btn = document.querySelector('.contact-share');
  btn.addEventListener('click', () => {
    const thisTitle = btn.closest('.user-contact__field').querySelector('.user-contact__input').value,
          thisUrl = window.location.href;
    shareItem(thisUrl, thisTitle);
  });
}

// поделиться объектом
function shareItem(thisUrl, thisTitle) {
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

export default profileFunctionality;