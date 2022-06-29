const API_URL = 'https://cataas.com/cat?json=true';
const button = document.getElementById('change-cat');
const cat = document.getElementById('cat');


// recupera uma foto de gato da api
async function getNewPhoto() {
    try {
        let data = await fetch(API_URL);
        let json = await data.json();
    
        if (json.url) {
            return 'https://cataas.com' + json.url;
        }
    }
    catch (err) {
        console.log(err.message);
    }
}


async function loadImage() {
    cat.src = await getNewPhoto();
}



// detecta cliques no botão
button.addEventListener('click', loadImage);


// ao carregar a página, carrega uma foto
loadImage();

