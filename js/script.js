//bars menu al objeto que tocaremos
document.querySelector(".bars__menu").addEventListener("click", animateBars);

//efecto letras
const typed = new Typed('.typed', {

    strings:['<p class="nombre">Oscar Alexander</p>',
            '<p class="nombre">Quintanilla Rodriguez.</p>' ],

    typeSpeed:50,
    backSpeed:50,
    loop:true,
    backDelay: 1400,
    showCursor: false,
});

const typed1 = new Typed('.typed1', {

    strings:['<p class="conoceme">Conoceme y ponte en contacto conmigo.</p>',
            ],

    typeSpeed:50,
    backSpeed:50,
    loop:true,
    backDelay: 1400,
    showCursor: false,
});
//AnimateBars es una funcion que creare y se utlizara para dar la animacion.

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var container__nav = document.querySelector(".container__nav");

//funcion
function animateBars(){

    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    container__nav.classList.toggle("activecontainer__nav");
}

