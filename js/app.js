document.addEventListener('DOMContentLoaded', () => {
    const menuListItems = document.querySelectorAll('p');
    const body = document.querySelector('body');
    menuListItems.forEach(function(listItem) {listItem.addEventListener('mouseover', handleDropDown)});
    menuListItems.forEach(function(listItem) {listItem.addEventListener('mouseleave', handleNavbarReset)});
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