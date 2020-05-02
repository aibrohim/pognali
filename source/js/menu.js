var menuOpener = document.querySelector(".page-header__toggle");
var pageHeader = document.querySelector(".page-header");
var mainNav = document.querySelector(".main-nav")

menuOpener.addEventListener('click', function(evt) {
  menuOpener.classList.toggle('page-header__toggle--opened');
  pageHeader.classList.toggle('page-header--opened');
  mainNav.classList.toggle('main-nav--opened');
});
