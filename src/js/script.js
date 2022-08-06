window.addEventListener('scroll', e => {
    let navbar = document.getElementById('navbar').classList;
    let activeClass = "navbar_active";

    if (scrollY > 420) navbar.add(activeClass);
    else navbar.remove(activeClass);

});