var number = 0;

var masOfArticle = [];

const resultBtn = document.querySelector('#number');
const result = document.querySelectorAll('button');

function basket() {
    var newSet = new Set(masOfArticle);
    var uniqueNumbers = Array.from(newSet);
    
    number = uniqueNumbers.length;
    resultBtn.innerHTML = number;
}

result.forEach(resultItem => {
    resultItem.addEventListener("click", basket);
})

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