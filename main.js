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







