import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import ItcTabs from "../libs/tabs";
import IMask from 'imask';

function profileFunctionality() {
  // инициализация .tabs как табов
  new ItcTabs('.my-profile-body', {}, 'second-tabs');

  // редактирование контактов
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

  // маска на телефон
  const tel = document.getElementById('user-tel');
  const whatsAppTel = document.getElementById('user-whatsapp');
  const maskOptions = {
    mask: '+7 000 000 00 00',
    lazy: false
  };
  new IMask(tel, maskOptions);
  new IMask(whatsAppTel, maskOptions);

  // слайдер изображений
  const imgsSwiper = new Swiper('.my-profile-imgs__swiper', {
    speed: 400,
    slidesPerView: 1.6,
  });

  // удаление фото в слайдере
  document.querySelector('.my-profile-imgs__swiper').addEventListener('click', (e) => {
    const target = e.target;
    // TODO: add fetch to delete img
    if (target.closest('.my-profile-imgs__delete')) {
      target.closest('.swiper-slide').remove();
      imgsSwiper.update();
    }
  });
  // добавление фото в слайдер
  const addBtn = document.querySelector('.my-profile-imgs__add');
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
        <div class="my-profile-imgs__slide">
          <div class="my-profile-imgs__img">
            <img src="${e.target.result}" alt="">
          </div>
          <div class="my-profile-imgs__delete">
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
}


export default profileFunctionality;