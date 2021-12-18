document.addEventListener('DOMContentLoaded', () => {
    const menuListItems = document.querySelectorAll('p');
    
    menuListItems.forEach(function(listItem) {listItem.addEventListener('mouseover', handleDropDown)});
    menuListItems.forEach(function(listItem) {listItem.addEventListener('mouseleave', handleNavbarReset)});

    const plusIcon = document.querySelector('.plus-icon')
    plusIcon.style.visibility = 'visible'
    plusIcon.addEventListener('click', handleOpenMenu)

    const mobileMenuChoices = document.querySelectorAll('.choice')
    mobileMenuChoices.forEach(function(choice) {choice.addEventListener('click', handleChoice)})

    let currentSlideIndex = 1;
    showSlides(currentSlideIndex);
    
})

const handleDropDown = function (event) {
    event.preventDefault();
    const currentMenuList = event.target.nextElementSibling.children
    Array.from(currentMenuList).forEach(function(item) {
        item.style.visibility = "visible"
    })
    
}

const handleNavbarReset = function (event) {
    const allMenuItems = document.querySelectorAll('.sub-menu-list')
    const allSubMenuItems = document.querySelectorAll('.sub-menu-list-item')
    console.log(allSubMenuItems);
    Array.from(allMenuItems).forEach(function(item) {
        console.log(item);
        item.style.visibility = "hidden"
    })
    Array.from(allSubMenuItems).forEach(function(item) {
        console.log(item);
        item.style.visibility = "hidden"
    })
}

const handleOpenMenu = function (event) {
    const allMobileMenuItems = document.querySelectorAll('.mobile-menu-list-item')
    Array.from(allMobileMenuItems).forEach(function(item){
        item.style.visibility = 'visible'
    })
    const mobileMenu = document.querySelector('.mobile-menu-list')
    mobileMenu.style.backgroundColor = "aqua";
    mobileMenu.style.borderRadius = "20px"
}

const handleChoice = function (event) {
    const allMobileMenuItems = document.querySelectorAll('.mobile-menu-list-item')
    Array.from(allMobileMenuItems).forEach(function(item){
        item.style.visibility = 'hidden'
    })

    const plusIcon = document.querySelector('.plus-icon')
    plusIcon.style.visibility = 'visible'
    const mobileMenu = document.querySelector('.mobile-menu-list')
    mobileMenu.style.backgroundColor = null;
    mobileMenu.style.borderRadius = null;
    
}

const showSlides = function(index) {
    let slideIndex = index;
    const slides = document.querySelectorAll('.mySlides')
    const dots = document.querySelectorAll('.dot')
    if (index > slides.length) {
        slideIndex = 1
    }
    if (index < 1) {slideIndex = slides.length}
    for (let slide of slides) {
        slide.style.display = 'none'
    }
    slides[slideIndex-1].style.display = 'block';

    
}

const plusSlides = function(n) {
    let slideIndex = getCurrentSlide();
    showSlides(slideIndex += n);
}

const currentSlide = function(n) {
    showSlides(n)
}

const getCurrentSlide = function() {
    const slides = document.querySelectorAll('.mySlides')
    let currentSlide;
    for (let slide of slides) {
        if (slide.style.display === 'block') {
            currentSlide = slide;
        }
    }
    return parseInt(currentSlide.id)
}