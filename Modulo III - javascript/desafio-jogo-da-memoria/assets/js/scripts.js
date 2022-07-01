const board = document.getElementById('game');

let hasFlippedCard = false;
let firstCard, secondCard;

const pokemons = [
    'bulbasaur',
    'charmander',
    'meowth',
    'pikachu',
    'squirtle',
    'vulpix',
];



/**
 * Duplica os pokemons e os embaralha
 */
function sufflePokemons() {
    let dup = [];

    pokemons.forEach((pokemon) => {
        dup.push({
            name: pokemon
        });
        dup.push({
            name: pokemon
        });
    });


    dup.forEach((pokemon, i) => {
        // gera um numero aleatório e o arredonda para baixo
        let rand = Math.floor(Math.random() * i);

        // armazena o item atual em uma variavel temporaria
        let atual = pokemon;

        // inverte o item atual
        dup[i] = dup[rand];

        dup[rand] = atual;

    });

    return dup;
}


/**
 * Limpa a página e insere os cards
 */
function newGame() {

    // limpa a página
    board.innerHTML = '';


    // insere os cards
    sufflePokemons().forEach((pokemon) => {
    
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-card', pokemon.name);
    
        // cria a parte frontal do card, onde será exibida a imagem do pokemon
        let front = document.createElement('div');
        front.classList.add('front');
        card.appendChild(front);
    
        // cria a parte de trás do card
        let back = document.createElement('div');
        back.classList.add('back');
        card.appendChild(back);

        // cria a imagem do pokemon
        let img = document.createElement('img');
        img.src = `assets/img/${pokemon['name']}.png`;
        front.appendChild(img);
    
        // insere o card na página
        board.appendChild(card);

        // adiciona um listener para escutar os cliques nos cards
        card.addEventListener('click', cardClick);
    
    });
}


function cardClick() {
    if (secondCard) return;

    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
    
        firstCard = this;
        return;
    }

    secondCard = this;

    setTimeout(() => {
        checkForMatch();

        hasFlippedCard = false;
        firstCard = null;
        secondCard = null;
    }, 500);
}


/**
 * Verifica se o dois cards abertos são iguais
 */
function checkForMatch() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unflipCards();
}


function disableCards() {
    firstCard.removeEventListener('click', cardClick);
    secondCard.removeEventListener('click', cardClick);
}

function unflipCards() {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
}



window.onload = newGame;
