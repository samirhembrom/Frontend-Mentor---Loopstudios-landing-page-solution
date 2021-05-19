

const navBtnEl = document.querySelector(".nav-toggle");
const navEl = document.querySelector(".nav");
const headerEl = document.querySelector('.header');
const headerColorEl = document.getElementsByClassName("header");
const h1El = document.querySelector(".hero__heading");
const hamburgerEl = document.querySelector(".hamburger-menu"); 
const imgEl = document.querySelectorAll(".creations__img");
const textEl = document.querySelectorAll(".creation__text ");
const imgWrapperEl = document.querySelectorAll(".img-wrapper");

for(let i=0; i < imgEl.length; i++){
    imgEl[i].addEventListener('click',()=>{
        imgWrapperEl[i].classList.toggle("opacity");
        textEl[i].classList.toggle("text-black");
    })
}

navBtnEl.addEventListener('click', () => {
    console.log("run");
    if(navEl.classList.contains('nav-display')){
        navEl.classList.remove("nav-display");
        headerEl.classList.remove('background-dark');
        document.getElementsByTagName('body')[0]. style .height = "";
        document.getElementsByTagName('body')[0]. style. overflow = "";
    }else{
        headerEl.classList.add('background-dark');
        navEl.classList.add("nav-display");
        document.getElementsByTagName('body')[0]. style .height = "100vh";
        document.getElementsByTagName('body')[0]. style. overflow = "hidden";
    }
    h1El.classList.toggle("visibility");
    hamburgerEl.classList.toggle("close-icon")
})

