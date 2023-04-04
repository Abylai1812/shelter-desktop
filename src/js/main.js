window.addEventListener("DOMContentLoaded",() => {
  
  
  const menuBurger = document.querySelector(".menu__burger");
  const headerMenu = document.querySelector(".header");

 menuBurger.addEventListener("click", () => {
    headerMenu.classList.toggle("open");
    document.body.classList.toggle("lock")
 })

//Slider

const sliderBtnPrev = document.querySelector(".arrow__btn-prev");
const sliderBtnNext = document.querySelectorAll(".arrow__btn-next");
const slider = document.querySelector(".pets__content")

sliderBtnPrev.addEventListener("click", () => {
   slider.classList.add("transition-prev")
});

slider.addEventListener("animationed", () => {
   slider.classList.add("transition-prev")
});



















})