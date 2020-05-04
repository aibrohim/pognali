var filtrOpener = document.querySelector(".filtr-country__button");
var filtrBody = document.querySelector(".filtr-country__body");

filtrBody.classList.remove("filtr-country__body--opened");

filtrOpener.addEventListener('click', function(evt) {
  filtrBody.classList.toggle("filtr-country__body--opened");
  filtrOpener.classList.toggle("filtr-country__button--opened")
})
