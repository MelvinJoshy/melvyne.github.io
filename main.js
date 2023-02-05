/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('toggle-open'),
      navClose = document.getElementById('toggle-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//======scrollreval-animation-settings=================//

ScrollReveal({
     reset: true,
     distance: '60px',
     duration: 1000,
     delay: 100
    })


//===home-section-animations=====//

ScrollReveal().reveal('.main-title', { delay: 200, origin:'left' });

ScrollReveal().reveal('.sub-title', { delay: 200, origin:'left' });

//===about-section-animation====//    

ScrollReveal().reveal('.about-main-title', { delay: 200, origin:'left' });

ScrollReveal().reveal('.about-sub-title', { delay: 200, origin:'right' });

ScrollReveal().reveal('.discription', { delay: 200 });

//===skill-section-animations===========//

ScrollReveal().reveal('.skill-title', { delay: 200, origin:'left' });

ScrollReveal().reveal('.skill-sub-title', { delay: 200, origin:'right' });

ScrollReveal().reveal('.skills', { delay: 100 });

//====projects-section-animation===========//

ScrollReveal().reveal('.projects-main-title', { delay: 200, origin:'left' });

ScrollReveal().reveal('.projects-sub-title', { delay: 200, origin:'right' });

ScrollReveal().reveal('.project-container', { delay: 100 });