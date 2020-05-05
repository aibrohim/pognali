var filtrOpener = document.querySelector(".filtr-country__button");
var filtrBody = document.querySelector(".filtr-country__body");
var filtrContainer = document.querySelector(".filtr-country__alphabet-button-container");

// filtrBody.classList.remove("filtr-country__body--opened");

if (window.screen.width < 768 && window.screen.width > 320) {
  filtrOpener.addEventListener('click', function(evt) {
    filtrBody.classList.add("filtr-country__body--opened");
    filtrOpener.classList.toggle("filtr-country__button--opened");
  })
} else if (window.screen.width >= 768) {
  filtrOpener.addEventListener('click', function(evt) {
    filtrContainer.classList.toggle("filtr-country__alphabet-button-container--opened");
    filtrOpener.classList.toggle("filtr-country__button--opened");
  })
}

