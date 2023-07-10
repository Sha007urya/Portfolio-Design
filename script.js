let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick= () => {
     menuIcon.classList.toggle('bx-x');
     navbar.classList.toggle('active');
};





window.onscroll=() => {
     let header= document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


};

// dark Light mode
let darkModeIcon= document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
darkModeIcon.classList.toggle('bx-sun');
document.body.classList.toggle('dark-mode');
};

ScrollReveal({ 
     reset: true,
     distance:'80px',
     duration: 2000,
     delay: 200

});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,   .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });




