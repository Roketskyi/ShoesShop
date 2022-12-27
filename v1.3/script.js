var number = 0;

var masOfArticle = [];

const resultBtn = document.querySelector('#number');
const result = document.getElementsByClassName('basket');

var wares = [
    { index: 1, img: 'shoes/1.webp', description: 'Чоботи Lasocki for men MI08-C315-354-04S', price: '2 230 грн.' },
    { index: 2, img: 'shoes/2.webp', description: 'Черевики Gino Rossi MI08-C535-537-07', price: '1 960 грн.' },
    { index: 3, img: 'shoes/3.webp', description: 'Черевики Gino Rossi MI08-C797-799-01', price: '1 999 грн.' },
    { index: 4, img: 'shoes/4.webp', description: 'Черевики Gino Rossi MI08-C667-658-01S', price: '2 390 грн.' },
    { index: 5, img: 'shoes/5.webp', description: 'Чоботи Gino Rossi MTU417-CHUCK-05', price: '1 899 грн.' },
    { index: 6, img: 'shoes/6.webp', description: 'Чоботи Lanetti MBS-JOSEPH-01', price: '1 930 грн.' }
]


function basket() {
    var newSet = new Set(masOfArticle);
    var uniqueNumbers = Array.from(newSet);
    
    number = uniqueNumbers.length;
    resultBtn.innerHTML = number;
}

document.addEventListener('DOMContentLoaded', () => {
    const div = document.createElement('div');
    div.id = 'shoes';
    wares.forEach(waress => {
        div.innerHTML +=
        `<div class="shoes_number">
            <div id="shoes_number_${waress.index}">
                <img src="${waress.img}" width="200" class="shoes_img">
                <p>${waress.description}</p>
                <div class="price">${waress.price}</div>
                <button class="basket" onclick="return masOfArticle.push(${waress.index}),basket()">До кошика</button>
            </div>
        </div>`;
    });

    shoes.appendChild(div);
});

document.querySelector("#img").onclick = () => {
    for(let i = 0; i < masOfArticle.length; i++){
        document.getElementById('shoes_number_' + masOfArticle[i]).classList.add('shoes_number_shadow');
    }

    return false;
}

document.querySelector(".clear").onclick = () => {
    number = 0;
    resultBtn.innerHTML = number;

    for(let i = 0; i < masOfArticle.length; i++){
        document.getElementById('shoes_number_' + masOfArticle[i]).classList.remove('shoes_number_shadow');
    }

    masOfArticle = [];
}
