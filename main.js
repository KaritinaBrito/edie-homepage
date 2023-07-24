const btnMenu = document.querySelector('#toogleMenu');
const navMenu = document.querySelector('#navbar-left');
const closeBtn = document.getElementById('closeBtn');


btnMenu.addEventListener('click', () => {
    navMenu.classList.add('visible');
})
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('visible');
})


