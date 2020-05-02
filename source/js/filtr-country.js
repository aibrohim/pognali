var filtrOpener = document.querySelector(".filtr-country__button");
var filtrBody = document.querySelector(".filtr-country__body");

filtrOpener.addEventListener('click', function(evt) {
  filtrBody.classList.toggle("filtr-country__body--opened");
  filtrOpener.classList.toggle("filtr-country__button--opened")
})
