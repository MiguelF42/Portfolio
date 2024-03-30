const main = document.getElementById('main');
const homeLink = document.getElementById('home-link');
const styleSwitcher = document.getElementById('style-switcher');
const passBg = document.getElementById('pass-bg');
const password = document.getElementById('password');

main.style.display = 'none';
homeLink.style.display = 'none';
styleSwitcher.style.display = 'none';
passBg.style.display = 'flex';

const checkPassword = () => {
    if (password.value === 'C’35t_L3-cTx=') {
        main.style.display = 'flex';
        homeLink.style.display = 'block';
        styleSwitcher.style.display = 'block';
        passBg.style.display = 'none';
    }
}