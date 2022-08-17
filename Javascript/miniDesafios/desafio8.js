// Obter a média de notas dentro de um array e classificar em:
//
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

let notas = [90,100,80];

function mediaDeNotas(notas) {
    let soma = 0;

    for (let nota of notas) {
        soma += nota
    }
    let media = soma / (notas.length);

    if (media < 59) {
        return 'F'
    }
    if (media <= 69) {
        return 'D'
    }
    if (media <= 79) {
        return 'C'
    }
    if (media <= 89) {
        return 'B'
    }
    return 'A'
}

let resultado = mediaDeNotas(notas);
console.log(resultado)


