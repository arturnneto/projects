// Criar uma função que retorna a soma de todos os múltiplos de 3 e 5

function somarMultiplos(valor) {
let contador = 0;
let data = 0;

    while (contador <= valor) {
        if (contador % 3 === 0) {
            data += contador
        }
        if (contador % 5 === 0) {
            data += contador
        }
    contador++
    }
    return (data)
}

let soma = somarMultiplos(10);
console.log(soma)
