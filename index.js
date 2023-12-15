function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrolly >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// ==================== SERVICES MODAL =================
const modalViews = document.querySelectorAll('.services_modal')
modalBtns = document.querySelectorAll('.services_button');
modalClose = document.querySelectorAll('.services_modal-close');
let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}
modalBtns.forEach((mb, i) => {
    mb.addEventListener('click',() =>{
        modal(i);
    })
})
modalClose.forEach((mc) => {
    mc.addEventListener('click',() => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal');
        })
    })
})

// ================= MIXITUP FILTER PORTFOLIO =================
let mixerPortfolio = mixitup('.work_container',{
    selectors:{
        target: '.work_card'
    },
    animation:{
        duration: 300
    }
});


// ==================== Link active work ========================
const linkwork = document.querySelectorAll('.work_item');
function activework(){
    linkwork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work');
}
linkwork.forEach(l => l.addEventListener('click',activework));

// ============== SWIPER TESTIMONIAL ==============
let swiperTestimonail = new Swiper(".testimonial_container",{
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination:{
        el: ".swiper-pagination",
        cilckable: true,
    },
    breakpoints: {
        576:{
            slidersPreview: 2,
        },
        768: {
            slidersPerview: 2,
            spaceBetween: 48,
        },
    },
});

// =============== SCROLL SECTION ACTIVE LINK =================
const section = document.querySelectorAll('section[id]');
function scrollActive(){
    const scrollY = window.pageYOffset;
    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')
        // console.log(sectionHeight);
        console.log(sectionTop);
        // console.log(sectionId);
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        }
        else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive);

// ======================= ScrollReaveal ==========================
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})
sr.reveal('.home_data');
sr.reveal('.home_handle', {delay: 700})
sr.reveal('.home_social, .home_scroll', {delay: 900,origin: 'bottom'})

// ==================== Dark Theme Color ========================
const themeBtn = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun';
// Preciously Selected Topic (is user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// 
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';


// 
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeBtn.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


// 
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)
    themeBtn.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})