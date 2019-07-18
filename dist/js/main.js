const menu = document.querySelector('#menu');

menu.addEventListener('click', onClickMenu);

function onClickMenu() {
    document.getElementById('menu').classList.toggle('change');
    document.getElementById('nav').classList.toggle('change');
    document.getElementById('menu-bg').classList.toggle('change-bg');
}

//! When User Scrolls 50px down from the top of the document, Change headers style
window.onscroll = function() {
    scrollFunctio();
};

function scrollFunctio() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('header').classList.add('active');
        document.getElementById('menu').classList.add('active');
    } else {
        document.getElementById('header').classList.remove('active');
        document.getElementById('menu').classList.remove('active');
    }
}