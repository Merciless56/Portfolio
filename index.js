'use strict'

const menulinks = document.querySelectorAll('.nav_link[data-goto]');

if (menulinks.length > 0) {
    menulinks.forEach(menulink => {
        menulink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menulink = e.target;
        if (menulink.dataset.goto && document.querySelector(menulink.dataset.goto)) {
            const gotoBlock = document.querySelector(menulink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth",
            });
            e.preventDefault()
        }
    }
}

let btn = document.querySelector('.btn_lang');
btn.onclick = function () {
    btn.classList.toggle('active');
}
