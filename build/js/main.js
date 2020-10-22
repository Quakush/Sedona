'use strict';

var searchBtn = document.querySelector('.search__btn');
var form = document.querySelector('.search__form');

console.log(searchBtn);
console.log(form);

searchBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (!form.classList.contains('hidden')) {
      form.classList.add('hidden');
    }
  }
});
