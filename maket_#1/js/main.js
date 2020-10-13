// accardion

const accordion = document.getElementsByClassName('acardion_item');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}

/*==== SCROOL REVEAL ANIMATION ====*/


window.sr = ScrollReveal();

sr.reveal('.animate_top', {
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})


sr.reveal('.animate_left', {
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.animate_right', {
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.animate_bottom', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
})



















