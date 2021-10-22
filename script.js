let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".navbarMain");


hamburger.addEventListener("click", function (){

    hamburger.classList.toggle("isactive");
    nav.classList.toggle("navActivation")

    if(nav.classList.contains("navActivation")){
        document.querySelector("body").style = "position:fixed"
    } else document.querySelector("body").style = "";

})
