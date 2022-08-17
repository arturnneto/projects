// Divisível por 3 -> Fizz
// Divisível por 5 -> Buzz
// Divisível por 3 e 5 -> FizzBuzz
// Outros casos -> Retorna o valor recebido
// Não é um número -> Retorna 'Não é um número'

function fizzBuzz(entrada) {
    if ((entrada % 5 == 0) && (entrada % 3 == 0)) {
        return 'fizzBuzz';
    }
    else if ((entrada % 3) == 0) {
        return 'fizz';
    }
    else if ((entrada % 5) == 0) {
        return 'buzz';
    }
    else if (isNaN(entrada)) {
        return 'O parâmetro recebido na entrada não é um numero';
    }
    else 
        return entrada;
}

let resultado = fizzBuzz('oi');
console.log(resultado);
