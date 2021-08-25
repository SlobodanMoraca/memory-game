document.addEventListener('DOMContentLoaded', () =>{

// card options
const cardArray = [

{
    name: 'apple',
    img: 'images/apple.png'
},
{
    name: 'apple',
    img: 'images/apple.png'
},
{
    name: 'burger',
    img: 'images/burger.png'
},
{
    name: 'burger',
    img: 'images/burger.png'
},
{
    name: 'chokolate',
    img: 'images/chokolate.png'
},
{
    name: 'chokolate',
    img: 'images/chokolate.png'
},
{
    name: 'donughts',
    img: 'images/donughts.png'
},
{
    name: 'donughts',
    img: 'images/donughts.png'
},
{
    name: 'makaruns',
    img: 'images/makaruns.png'
},
{
    name: 'makaruns',
    img: 'images/makaruns.png'
},
{
    name: 'pancake',
    img: 'images/pancake.png'
},
{
    name: 'pancake',
    img: 'images/pancake.png'
},
{
    name: 'takos',
    img: 'images/takos.png'
},
{
    name: 'takos',
    img: 'images/takos.png'
},
{
    name: 'blt',
    img: 'images/blt.png'
},
{
    name: 'blt',
    img: 'images/blt.png'
},
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result')
const trzNumber = document.querySelector('#Trys')
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
let brojac = 0;
//create board

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        let card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

//chek for marches
function chekForMatch(){
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(cardsChosen[0] === cardsChosen[1]){
        alert('You fund a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].classList.add('lock');
        cards[optionTwoId].classList.add('lock');
        brojac++;
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')  
        brojac++;
        alert('Sorry, try again')
    }

    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    trzNumber.textContent = brojac;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you Won!'
    }
}


//flip your card
function flipcard() {
let cardId = this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
cardsChosenId.push(cardId)
this.setAttribute('src', cardArray[cardId].img)
if(cardsChosen.length === 2){
    setTimeout (chekForMatch, 500)
}
}






createBoard()

//end of DOM
})