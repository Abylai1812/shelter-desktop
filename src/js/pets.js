window.addEventListener("DOMContentLoaded",() => {
  
  
    const menuBurger = document.querySelector(".menu__burger1");
    const headerMenu = document.querySelector(".header-pets");
  
   menuBurger.addEventListener("click", () => {
      headerMenu.classList.toggle("open");
      document.body.classList.toggle("lock")
   })
  
  
  
  
  })