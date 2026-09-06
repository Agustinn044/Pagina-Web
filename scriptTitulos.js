const menuTitulos = document.querySelector('.menu-copas-lateral');

document.querySelectorAll('.item-copa').forEach((item) => {

item.addEventListener('click', () => {

    if (window.innerWidth > 768) return;

    setTimeout(() => {
        menuTitulos.removeAttribute('open');
    }, 400);

});

});

