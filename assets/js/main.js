/* ================== Show Menu===========================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/* =============== MENU SHOW =================*/ 
/* Validate if constant exists */
if (navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu')
        })
}


/* =============== MENU HIDDEN =================*/ 
/* Validate if constant exists */

if (navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


/* ====================== Remove MENU MOBILE ===============================*/
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*================== CHANGE BACKGROUND HEADER =====================================*/ 
function scrollHeader(){
    const header = document.getElementById('header');
    //when the scroll is greater than 100 viweport height , add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header');else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

/*================= SWIPER DISCOVER ========================*/ 
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween:32,
    coverflowEffect: {
      rotate: 0,
    },
  });

  /* =============== VIDEO =======================*/ 
  const videoFile = document.getElementById('video-file'),
        videoButton = document.getElementById('video-button'),
        videoIcon = document.getElementById('video-icon');

function playPause(){
    if(videoFile.paused){
        //Play Video
        videoFile.play()

        //We Change the Icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else{
        //pause video
        videoFile.pause()

        // We change the Icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}

videoButton.addEventListener('click', playPause)