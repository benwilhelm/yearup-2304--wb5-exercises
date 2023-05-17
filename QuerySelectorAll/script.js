const imageGroupEls = document.getElementsByClassName('imageGroup');

Array.from(imageGroupEls).forEach((imageGroupEl) => {
  imageGroupEl.style.border = '2px solid red';
  imageGroupEl.style.marginBottom = '2em';
});

const imageWithoutAltEls = document.querySelectorAll('img:not([alt])');

Array.from(imageWithoutAltEls).forEach((imgEl) => {
  imgEl.alt = 'graffiti image';
});
