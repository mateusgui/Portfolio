function menuShowIndex() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../img/close_white_36dp.svg";
    }
}

document.querySelectorAll('.nav-item a').forEach(link => {
    const img = link.querySelector('.nav-icon');

    if (img) {
        const originalSrc = img.src;
        const hoverSrc = img.getAttribute('data-hover');

        link.addEventListener('mouseenter', () => {
            img.src = hoverSrc;
        });

        link.addEventListener('mouseleave', () => {
            img.src = originalSrc;
        });
    }
});