window.addEventListener('scroll', e => {
    let navbar = document.getElementById('navbar').classList;
    let activeClass = "navbar_active";

    if (scrollY > 420) navbar.add(activeClass);
    else navbar.remove(activeClass);

});


function btnCvActive() {
    let btnCvA = document.getElementById('btnCv').classList;
    let btnCvActive = 'btn_cv_active';
    
    btnCvA.add(btnCvActive);

    function bntCvDis () {
        btnCvA.remove(btnCvActive);
    }
    setTimeout(bntCvDis, 2000);
}

setInterval(btnCvActive, 4000);

function btnCvActiveNav() {
    let btnCvA = document.getElementById('btnCvNav').classList;
    let btnCvActive = 'btn_cv_active';
    
    btnCvA.add(btnCvActive);

    setTimeout(function () {
        btnCvA.remove(btnCvActive);
    }, 2000);
}

setInterval(btnCvActiveNav, 4000);


let popupLinksClose = document.querySelector('.popup-close');
let popupBody = document.getElementById('popup').classList;
let popupActive = 'popup_open';

setTimeout(function () {
    popupBody.add(popupActive);
    } , 100);


popupLinksClose.addEventListener('click', ()=> {
    popupBody.remove(popupActive);
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        popupBody.remove(popupActive);
    }
});

