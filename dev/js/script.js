let burger = document.querySelector('.main__nav__burger');
let menu = document.querySelector('.nav__mobile');
let link = document.querySelectorAll('.nav__link');
let navLinks = document.querySelector('.main__nav__links');


function hasClick(){
  navLinks.classList.toggle("active");
  menu.classList.toggle("active");
}
burger.addEventListener("click", hasClick);
for(i=0; i<link.length; i++){
  link[i].addEventListener("click", hasClick)
}