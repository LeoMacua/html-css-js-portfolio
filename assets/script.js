function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.menu-icon');
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
});