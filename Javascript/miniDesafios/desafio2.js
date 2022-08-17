// Escreva uma funçao que analise dois numeros e retorne o maior valor entre eles

function max(valor1,valor2) {
    if (valor1 > valor2) 
        return valor1;
    else if (valor2 > valor1) 
        return valor2;
    else 
        return 'não foi possível comparar os valores';
}

let valorMaior = max(5,5)
console.log(valorMaior);

// armazenando o resultado da funçao numa variavel, ela tem uso em vez de ser só um console.log qualquer
// nao tem problema chamar uma funçao dentro de uma const ou let 

// OU

function nome(numero1, numero2) {
    return numero1 > numero2 ? numero1: numero2;
}