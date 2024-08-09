function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    
    // Check if the click was outside the menu and the hamburger icon
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        if (menu.classList.contains('open')) {
            menu.classList.remove("open");
            icon.classList.remove("open");
        }
    }
});