// Recebe uma quantidade de valores para avaliar, e exibe se cada valor é par ou ímpar

function parOuImpar(quantidade) {
    for (let min = 0; quantidade >= min; min++) {
        if (min % 2 == 0) {
            console.log(min + ' par.')
        }
        if (min % 2 > 0) {
            console.log(min + ' ímpar.')
        }
    }
};

let valores = parOuImpar(5);
console.log(valores);
