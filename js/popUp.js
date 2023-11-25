'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const popupForm = {
    modal: document.querySelector('.js-lightbox'),
    lightboxForm: document.querySelector('.popup-form'),
    btnOpenModal: document.querySelector('.request-call-btn'),
    btn: document.querySelector('.popup-button')
  };

  const showModal = (event) => {
    event.preventDefault();
    const { target } = event;
    popupForm.modal.classList.add('is-open');
  };

  const hideModal = (event) => {
    const { target } = event;

    if(target.nodeName === 'IMG' || target.nodeName === 'DIV') {
      popupForm.modal.classList.remove('is-open');
    }
  };

  const hideModalWithEsc = (event) => {

    if(event.code === 'Escape') {
      popupForm.modal.classList.remove('is-open');
    }
  };

  popupForm.btnOpenModal.addEventListener('click', showModal);
  popupForm.modal.addEventListener('click', hideModal);
  document.addEventListener('keydown', hideModalWithEsc);
});