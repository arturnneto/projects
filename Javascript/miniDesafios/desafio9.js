// Função que devolva a quantidade de asteriscos que a linha possui

function exibirAsteriscos(valor) {
let contador = 0;
let str = '*';

    for (contador = 0; contador <= valor; contador++) {
        console.log(str.repeat(contador))
    }
}

exibirAsteriscos(10);