const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const footer = document.getElementsByTagName('footer')[0];

const darkModeClass = 'dark-mode';


function changeMode() {
    changeClass();
    changeText();
}


function changeClass() {
    [button, h1, footer, document.body].forEach((el) => {
        el.classList.toggle(darkModeClass);
    });
}

function changeText() {
    if (document.body.classList.contains(darkModeClass)) {
        button.innerHTML = 'Light Mode';
        h1.innerHTML = 'Dark Mode On';
        return;
    }

    button.innerHTML = 'Dark Mode';
    h1.innerHTML = 'Light Mode On';
}



button.addEventListener('click', changeMode);


