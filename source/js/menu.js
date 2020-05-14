var menuOpener = document.querySelector(".page-header__toggle");
var pageHeader = document.querySelector(".page-header");
var mainNav = document.querySelector(".main-nav");

pageHeader.classList.remove("page-header--no-js");

// window.addEventListener('scroll', function(evt) {
//   pageHeader.classList.toggle("page-header--scroll", window.scrollY > 0);
// });

menuOpener.addEventListener('click', function(evt) {
  menuOpener.classList.toggle('page-header__toggle--opened');
  pageHeader.classList.toggle('page-header--opened');
  mainNav.classList.toggle('main-nav--opened');
  pageHeader.classList.remove("page-header--scroll");
});
