let menu = document.querySelector('#menu');
let navbar = document.querySelector('nav');

menu.addEventListener('click' , function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('navtoggle');
});


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('navtoggle');
}

let splide = new Splide( '.splide' ).mount(); 
 

 