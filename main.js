const navItems = document.querySelectorAll('.nav__item');

function dropdownMenu() {
    const windowWidth = window.innerWidth;
    const navDropdown = document.querySelectorAll('.nav__dropdown-menu-list');
    const underlineMainColors = document.querySelectorAll('.underline-main-color');
    const dropMenuItems = document.querySelectorAll('.dropdown-menu__item');
    const dropMenuLinks = document.querySelectorAll('.dropdown-menu__link');
    const underlineNavColor = document.querySelectorAll('.underline-nav-color');
    const dropdownSubMenus = document.querySelectorAll('.dropdown-submenu');
    const blogDropdownMenu__lists = document.querySelectorAll('.dropdown-menu__list');
    const barButton = document.querySelector('.bar-menu');
    const nav = document.querySelector('.nav')
    console.log(navItems);
    dropMenuItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            dropMenuLinks[index].style.color = '#3fd0d4';
        })
    })

    dropMenuItems.forEach((item, index) => {
        item.addEventListener('mouseleave', () => {
            dropMenuLinks[index].style.color = '#1c1c1c';
        })
    })

    if (windowWidth > 768) {
        navItems.forEach((navItem, index) => {
            navItem.addEventListener('mouseenter', () => {
                const heightDropMenu = navDropdown[index].getAttribute('height');
                navDropdown[index].style.height = heightDropMenu + 'px';
                navDropdown[index].style.visibility = 'visible';
                underlineMainColors[index].style.width = '100%';
            })
        })

        navItems.forEach((navItem, index) => {
            navItem.addEventListener('mouseleave', () => {
                navDropdown[index].style.height = '0px';
                navDropdown[index].style.visibility = 'hidden';
                underlineMainColors[index].style.width = '0';

            })
        })

        dropMenuItems.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                underlineNavColor[index].style.width = '100%';
            })
        })

        dropMenuItems.forEach((item, index) => {
            item.addEventListener('mouseleave', () => {
                underlineNavColor[index].style.width = '0';
            })
        })

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
    } else {
        barButton.addEventListener('click', () => {
            nav.classList.toggle('active');
        })
        const navActive = document.querySelector('.nav.active')
        navItems.forEach((navItem, index) => {

            navItem.addEventListener('click', (e) => {
                e.preventDefault();
                let subMenu = navItem.querySelector('.nav__dropdown-menu-list');
                const height = subMenu.getAttribute('height');
                let realHeight = subMenu.style.height;
                console.log(realHeight);
                if (realHeight) {
                    console.log(1);
                    subMenu.style.height = '';
                    nav.style.height = '290px';
                    nav.style.overflow = 'hidden';

                } else {
                    console.log(2);
                    subMenu.style.height = `${height}px`;
                    nav.style.height = '340px';
                    nav.style.overflowY = 'auto';

                }
                subMenu.classList.toggle('active');

            })
        })
    }

}

dropdownMenu();
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




// 
const play = document.querySelector('.travel-video');
const video = document.querySelector('.app__video');
const iframe = document.querySelector('.app__iframe');
play.addEventListener('click', (e) => {
    e.preventDefault();
    video.classList.add('active');
    iframe.src = 'https://player.vimeo.com/video/127347999';
})

video.addEventListener('click', (e) => {
    video.classList.remove('active');
    iframe.src = '';

})














