// Criar o objeto endereço com rua, cidade e cep e uma função que retorne seus parametros

const enderecoMeu = {
    rua: 'a',
    cidade: 'b',
    cep: 12345678
}

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave,endereco[chave])
}

let enderecoArtur = exibirEndereco(enderecoMeu);
