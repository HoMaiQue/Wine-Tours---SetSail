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

const slideBigImg = document.querySelectorAll('#slide-big-img .slider__img-big');
const slideSmallImg = document.querySelectorAll('#slide-small-img img');
const slideLogo = document.querySelectorAll('.slider__logo');

let index = 0;
let interval = setInterval(run, 5000);

function run() {
    index++;
    changeSlide();
}

function changeSlide() {
    const windowWidth = window.innerWidth;
    if (index > slideBigImg.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = slideBigImg.length - 1;
    }


    removeOpacity(slideBigImg);
    removeOpacity(slideSmallImg);
    slideBigImg[index].classList.add('active');
    slideSmallImg[index].classList.add('active');
    if (windowWidth >= 740 && windowWidth <= 1023) {
        slideBigImgs.style.transform = `translateX(${-index * 384}px)`;
        slideSmallImgs.style.transform = `translateX(${-index * 186}px)`;
    } else if (windowWidth <= 739) {
        slideBigImgs.style.transform = `translateX(${-index * 300}px)`;
        slideSmallImgs.style.transform = `translateX(${-index * 300}px)`;
    } else {
        slideBigImgs.style.transform = `translateX(${-index * 723}px)`;
        slideSmallImgs.style.transform = `translateX(${-index * 349}px)`;
    }

    removeOpacity(slideLogo);
    slideLogo[index].classList.add('active');

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

// --------------------------
const chartCountry = document.querySelector('.popular-tours__chart-reality-country');
const chartVineYard = document.querySelector('.popular-tours__chart-reality-vineYard');
const chartWineTasting = document.querySelector('.popular-tours__chart-reality-wineTasting');

function setIntervalPercent(realWidth, chart) {
    let initWidth = -1;
    let interval = setInterval(() => {
        initWidth++;
        chart.style.width = `${initWidth}%`;
        if (initWidth === realWidth) {
            clearInterval(interval);
        }
    }, 30);
}

const percentCountry = 75;
const percentVineYard = 92;
const percentWineTasting = 86;

function runPercent() {
    let pageOffset = pageYOffset;
    if (pageOffset >= 500) {
        setIntervalPercent(percentCountry, chartCountry);
        setIntervalPercent(percentVineYard, chartVineYard);
        setIntervalPercent(percentWineTasting, chartWineTasting);
        window.removeEventListener('scroll', runPercent)
    }
}
window.addEventListener('scroll', runPercent);

function setIntervalNumber(realNumber, detailNumber, numberDistance) {
    let initNumber = +detailNumber.innerText;
    let interval = setInterval(() => {
        initNumber += numberDistance;
        detailNumber.innerText = initNumber;
        if (initNumber === realNumber) {
            clearInterval(interval);
        }
    }, 100)
}

function runNumber() {
    const numberGlassOfWine = document.querySelector('.glass-of-wine');
    const numberYearOfExperience = document.querySelector('.year-of-experience');
    const numberUniqueWine = document.querySelector('.unique-wines');
    const numberSortsOfWine = document.querySelector('.sorts-of-wine');
    const pageOffset = pageYOffset;
    console.log(pageOffset);
    if (pageOffset >= 2390) {
        setIntervalNumber(45, numberGlassOfWine, 3);
        setIntervalNumber(126, numberYearOfExperience, 8);
        setIntervalNumber(452, numberUniqueWine, 30);
        setIntervalNumber(247, numberSortsOfWine, 16);
        window.removeEventListener('scroll', runNumber);
    }
}

window.addEventListener('scroll', runNumber);

// 

const barButton = document.querySelector('.bar-menu');

const nav = document.querySelector('.nav');
barButton.addEventListener('click', () => {
    nav.classList.toggle('active');

})














