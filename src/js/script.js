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

    console.log('hi!');

}

setInterval(btnCvActive, 4000);

function btnCvActiveNav() {
    let btnCvA = document.getElementById('btnCvNav').classList;
    let btnCvActive = 'btn_cv_active';
    
    btnCvA.add(btnCvActive);

    function bntCvDis () {
        btnCvA.remove(btnCvActive);
    }

    setTimeout(bntCvDis, 2000);

    console.log('hi!');

}

setInterval(btnCvActiveNav, 4000);
