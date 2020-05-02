var hobbyOpener = document.querySelector("#filtr-opener--hobby");
var musicOpener = document.querySelector("#filtr-opener--music");
var foodOpener = document.querySelector("#filtr-opener--food");
var transportOpener = document.querySelector("#filtr-opener--transport");
var levelOpener = document.querySelector("#filtr-opener--level");
var hobbyContent = document.querySelector("#filtr-content--hobby");
var musicContent = document.querySelector("#filtr-content--music");
var foodContent = document.querySelector("#filtr-content--food");
var transportContent = document.querySelector("#filtr-content--transport");
var levelContent = document.querySelector("#filtr-content--level");

hobbyOpener.addEventListener('click', function(){
  hobbyContent.classList.toggle('filtr-companion__part-right--closed');
})

musicOpener.addEventListener('click', function(){
  musicContent.classList.toggle('filtr-companion__part-right--closed');
})

foodOpener.addEventListener('click', function(){
  foodContent.classList.toggle('filtr-companion__part-right--closed');
})

transportOpener.addEventListener('click', function(){
  transportContent.classList.toggle('filtr-companion__part-right--closed');
})

levelOpener.addEventListener('click', function(){
  levelContent.classList.toggle('filtr-companion__part-right--closed');
})
