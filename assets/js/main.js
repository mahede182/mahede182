/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menus');
const navApps = document.getElementById('nav-apps');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navApps){
    navApps.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
// if(navApps){
//     navApps.addEventListener('click',()=>{
//         navMenu.classList.remove('show-menu')
//     })
// }

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menus')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

// console.log(skillsContent)
// console.log(skillsHeader)

function toggleSkills(){
    let itemClass = this.parentNode.className;
    // console.log(itemClass)
    for(i=0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'

    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.add('qualification__active')
        })
        tab.classList.remove('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button')
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal');
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio__container',{
    cssMode: true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: false,
      },
    zoom: {
    maxRatio: 2,
    },
    mousewheel: true,
    keyboard: true,
})

// ===categories portfolio===

let list = document.querySelectorAll('.list')
let itemBox = document.querySelectorAll('.itemBox')

for(let i  = 0; i<list.length; i++){
    list[i].addEventListener('click',function(){

        for(let j = 0; j<list.length; j++){
           list[j].classList.remove('active'); 
        }

            this.classList.add('active');

            let dataFilter = this.getAttribute('data-filter')

            for (let k = 0; k<itemBox.length; k++){
               itemBox[k].classList.remove('active');
               itemBox[k].classList.add('hide');

                if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                   itemBox[k].classList.remove('hide');
                   itemBox[k].classList.add('active');
                }
            } 
    })
}

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL Up ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp)


/*==================== SHOW SCROLL Top ====================*/ 
// function scrollTop(){
//     const scrollTop = document.getElementById('scroll-top');

//     if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
//     else scrollTop.classList.remove('show-scroll');
// }
// window.addEventListener('scroll',scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// previously selcted topic(if user selected)
const selectedTheme=localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'ul-moon':'ul-light';

// we validate if the user previously chose a topic

if(selectedTheme){
    // if validation fullfilled
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon==='uil-moon'?'add':'remove'](iconTheme)
}

// activate / deactovate theme
themeButton.addEventListener('click',()=>{
    // add / remove class
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
    
})

// =====Send Email===
function sendEmail(){
   
}

// ===check send message===
var btn = document.getElementById("send__message");
btn.addEventListener('click',function(e){
    e.preventDefault();
    
})