//fecha

const fecha = document.querySelector('#fecha');
const FECHA = new Date();
fecha.innerHTML = FECHA.toLocaleDateString('es-ES', { weekday: 'long', month: 'short', day: 'numeric' })

console.log(window.scrollY);

// Menu

const skills = document.querySelector('#skill');
const projectosNav = document.querySelector('#projectosNav');
const contactNav = document.querySelector('#contactNav');

skills.addEventListener('click', () => {
    window.scrollTo(0, 791.2000122070312);
});

projectosNav.addEventListener('click', () => {
    window.scrollTo(0, 1559.900058828125);
});

contactNav.addEventListener('click', () => {
    window.scrollTo(0, 10000);
});

//Switcher

const btnswitch = document.querySelector('#switch');

btnswitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnswitch.classList.toggle('active');
});


/* Para el typing effect*/

if (screen.width > 850) {
    const text = document.querySelector('.second-text');
    const textLoad = () => {
        setTimeout(() => {
            text.textContent = ' Web Designer';
        }, 0);
        setTimeout(() => {
            text.textContent = ' Full Stack';
        }, 4000);
        setTimeout(() => {
            text.textContent = ' Web Developer';
        }, 8000);
    }
    textLoad();
    setInterval(textLoad, 12000);
}


/*Para los projects*/

const projectos1 = document.querySelector('#card1');
const projectos2 = document.querySelector('#card2');
const projectos3 = document.querySelector('#card3');
let projectosText1 = document.querySelector('#projectosText1');
let projectosText2 = document.querySelector('#projectosText2');
let projectosText3 = document.querySelector('#projectosText3');
let frame1 = document.querySelector('#frame1');
let frame2 = document.querySelector('#frame2');
let frame3 = document.querySelector('#frame3');
let mousemove = false;

projectos1.addEventListener('mousemove', () => {
    projectosText1.removeAttribute("hidden");
    frame1.removeAttribute("hidden");
    mousemove = true;
    if (mousemove == true) {
        projectos1.addEventListener('mouseleave', () => {
            projectosText1.setAttribute("hidden", "hidden");
            frame1.setAttribute("hidden", "hidden");
            mousemove = false;
        });
    }
});

projectos2.addEventListener('mousemove', () => {
    projectosText2.removeAttribute("hidden");
    frame2.removeAttribute("hidden");
    mousemove = true;
    if (mousemove == true) {
        projectos2.addEventListener('mouseleave', () => {
            projectosText2.setAttribute("hidden", "hidden");
            frame2.setAttribute("hidden", "hidden");
            mousemove = false;
        });
    }
});

projectos3.addEventListener('mousemove', () => {
    projectosText3.removeAttribute("hidden");
    frame3.removeAttribute("hidden");
    mousemove = true;
    if (mousemove == true) {
        projectos3.addEventListener('mouseleave', () => {
            projectosText3.setAttribute("hidden", "hidden");
            frame3.setAttribute("hidden", "hidden");
            mousemove = false;
        });
    }
});

/*Para nuevas paginas*/

const imagen1 = document.querySelector('#card1');
const imagen2 = document.querySelector('#card2');
const imagen3 = document.querySelector('#card3');

imagen1.addEventListener('click', () => {
    window.open('https://learning.edx.org/course/course-v1:HarvardX+CS50W+Web/home', '_blank');
});

imagen2.addEventListener('click', () => {
    window.open('http://127.0.0.1:5501/index.html');
});

imagen3.addEventListener('click', () => {
    window.open('https://www.youtube.com/channel/UCtlAu33gvAeILvGO_QBdnPg');
});


/*Efecto ticket*/ /*el aparecer y desaparecer el back se puede hacer con un hover en el css*/

let back1 = document.querySelector('#back5');

const $ = selector => document.querySelector(selector);

const wrapper = $('.pruebaTicket2');
const ticket = $('.pruebaticket3');

const { width, height } = wrapper.getBoundingClientRect();

const halfHeight = height / 2;
const halfWidth = width / 2;


wrapper.addEventListener('mousemove', event => {
    ticket.style.transition = 'none';


    const { offsetX, offsetY } = event;


    back1.removeAttribute("hidden");


    const rotationX = ((offsetX - halfWidth) / halfWidth) * 10;
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 10;

    ticket.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`


});

wrapper.addEventListener('mouseleave', () => {
    ticket.style.transform = `rotateX(0deg) rotateY(0deg)`

    ticket.style.transition = 'all 0.5s ease-in-out';

    back1.setAttribute("hidden", "hidden");

});


/*Desaparecer mano*/


const botonMano = document.querySelector('#botonMano');
let manoi = document.querySelector('#mano');

botonMano.addEventListener('click', () => {
    manoi.style.display = 'none';
});

/*Menu para el boton del footer*/

let btn = document.querySelector('#btn-up');
let navBotton1 = document.querySelector('#navBotton-item1');
let navBotton2 = document.querySelector('#navBotton-item2');
let navBotton3 = document.querySelector('#navBotton-item3');
let navBotton4 = document.querySelector('#navBotton-item4');
let oneclick = false;


btn.addEventListener('click', () => {
    if (oneclick == false) {
        navBotton1.removeAttribute("hidden");
        navBotton2.removeAttribute("hidden");
        navBotton3.removeAttribute("hidden");
        navBotton4.removeAttribute("hidden");
        oneclick = true;
    }
    else {
        navBotton1.setAttribute("hidden", "hidden");
        navBotton2.setAttribute("hidden", "hidden");
        navBotton3.setAttribute("hidden", "hidden");
        navBotton4.setAttribute("hidden", "hidden");
        oneclick = false;
    }
});


navBotton1.addEventListener('click', () => {
    let top = window.scrollY;
    window.scrollTo(0, top - 10000);
});

navBotton2.addEventListener('click', () => {
    window.scrollTo(0, 791.2000122070312);
});

navBotton3.addEventListener('click', () => {
    window.scrollTo(0, 1559.900058828125);
});

navBotton4.addEventListener('click', () => {
    window.scrollTo(0, 10000);
});

//Scroll navboton con un position fixed

const nav = document.querySelector('#navBotton');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add('navBotton--hidden');
        navBotton1.setAttribute("hidden", "hidden");
        navBotton2.setAttribute("hidden", "hidden");
        navBotton3.setAttribute("hidden", "hidden");
        navBotton4.setAttribute("hidden", "hidden");
        oneclick = false;
    } else {
        nav.classList.remove('navBotton--hidden');
    }
    lastScrollY = window.scrollY;
});
