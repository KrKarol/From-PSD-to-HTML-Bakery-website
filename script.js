let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");


hamburger.addEventListener("click", function (){

    hamburger.classList.toggle("isactive");
    nav.classList.toggle("active")

})
