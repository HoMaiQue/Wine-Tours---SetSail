const dropdownSubMenus = document.querySelectorAll('.dropdown-submenu');
const blogDropdownMenu__lists = document.querySelectorAll('.dropdown-menu__list');
dropdownSubMenus.forEach((dropdownSubMenu, index) => {
    dropdownSubMenu.addEventListener('mouseenter', () => {
        blogDropdownMenu__lists[Math.trunc(index / 2)].style.overflow = 'visible';
    })
})

dropdownSubMenus.forEach((dropdownSubMenu, index) => {
    dropdownSubMenu.addEventListener('mouseleave', () => {
        blogDropdownMenu__lists[Math.trunc(index / 2)].style.overflow = 'hidden';
    })
})


const dropMenuItems = document.querySelectorAll('.dropdown-menu__item');
const dropMenuLinks = document.querySelectorAll('.dropdown-menu__link');
const underlineNavColor = document.querySelectorAll('.underline-nav-color')

dropMenuItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        dropMenuLinks[index].style.color = '#3fd0d4';
        underlineNavColor[index].style.width = '100%';
    })
})

dropMenuItems.forEach((item, index) => {
    item.addEventListener('mouseleave', () => {
        dropMenuLinks[index].style.color = '#1c1c1c';
        underlineNavColor[index].style.width = '0';

    })
})


//--------------------

const slideBigImgs = document.getElementById('slide-big-img');
const slideSmallImgs = document.getElementById('slide-small-img');

const leftBtn = document.querySelector('.slider__button-left');
const rightBtn = document.querySelector('.slider__button-right');

const slideBigImg = document.querySelectorAll('#slide-big-img img');
const slideSmallImg = document.querySelectorAll('#slide-small-img img');

let index = 0;

let interval = setInterval(run, 5000);

function run() {
    index++;
    changeSlide();
}

function changeSlide() {
    if (index > slideBigImg.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = slideBigImg.length - 1;
    }
    removeOpacity(slideBigImg);
    removeOpacity(slideSmallImg);
    slideBigImg[index].classList.add('active');
    slideSmallImg[index].classList.add('active');
    slideBigImgs.style.transform = `translateX(${-index * 723}px)`;
    slideSmallImgs.style.transform = `translateX(${-index * 349}px)`;

}

function removeOpacity(slideImg) {
    slideImg.forEach(slide => {
        slide.classList.remove('active');
    })
}

function resetInterval() {
    clearInterval(interval);

    interval = setInterval(run, 5000);

}

rightBtn.addEventListener('click', (e) => {
    e.preventDefault();
    index++;
    resetInterval();
    changeSlide();
})


leftBtn.addEventListener('click', (e) => {
    e.preventDefault();
    index++;
    resetInterval();
    changeSlide();
})







