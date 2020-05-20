var businessOpener = document.querySelector(".pricing-plans__business");
var businessClose = document.querySelector(".business-plans__close");
var business = document.querySelector(".business-plans");

businessOpener.addEventListener("click", function(evt){
  evt.preventDefault();
  business.classList.toggle("business-plans--opened");
})

businessClose.addEventListener("click", function(evt){
  evt.preventDefault();
  business.classList.remove("business-plans--opened")
})
