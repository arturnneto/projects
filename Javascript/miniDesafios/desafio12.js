// Criar uma função que compare dois objetos e retorne se eles são iguais em valor ou em referência

function criarEndereco(rua,cidade,cep) {
    return {
        rua,
        cidade,
        cep
    }
}
let endereco1 = criarEndereco('a','b','c');
let endereco2 = criarEndereco('a','b','c');

function saoIguais(endereco1,endereco2) {
    const keys1 = Object.keys(endereco1);
    const keys2 = Object.keys(endereco2);

    for (let key of keys1) {
        if (endereco1[key] !== endereco2[key]) {
            return false
        }
    }
    return true
}

function apontamParaMesmaMemoria(endereco1,endereco2) {
    if (endereco1 === endereco2) {
        return true
    }
    return false
}

let funcaoSaoIguais = saoIguais(endereco1,endereco2)
console.log(funcaoSaoIguais)

let funcaoMemoria = apontamParaMesmaMemoria(endereco1,endereco2)
console.log(funcaoMemoria)
