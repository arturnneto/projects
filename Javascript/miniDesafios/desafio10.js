// Função que escreva apenas numeros primos

function escreverPrimos(limite) {
    let contador = 2;

    while (contador <= limite) {
        if (contador === 2 || contador === 3 || contador === 5 || contador === 7) {
            console.log(contador)
        }
        else if (contador % 2 > 0 && contador % 3 > 0 && contador % 5 > 0 && contador % 7 > 0) {
            console.log(contador)
        }
    contador++
    }
}

escreverPrimos(15)
console.log()

// forma mais inteligente, utilizando o metodo de reaproveitamento de funçoes

function exibirPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (primoOuNao(numero)) console.log (numero);
    }
}

function primoOuNao(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true
}

escreverPrimos(15)