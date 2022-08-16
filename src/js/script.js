window.addEventListener('scroll', e => {
    let navbar = document.getElementById('navbar').classList;
    let activeClass = "navbar_active";

    if (scrollY > 420) navbar.add(activeClass);
    else navbar.remove(activeClass);

});



// let popupLinksClose = document.querySelector('.popup-close');
// let popupBody = document.getElementById('popup').classList;
// let popupActive = 'popup_open';

// setTimeout(function () {
//     popupBody.add(popupActive);
//     } , 100);


// popupLinksClose.addEventListener('click', ()=> {
//     popupBody.remove(popupActive);
// });

// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape') {
//         popupBody.remove(popupActive);
//     }
// });

