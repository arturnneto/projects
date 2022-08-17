// Criar um método de ler as propriedades de um objeto e exibir apenas as propriedades do tipo string

const filme = {
    duracao: 2,
    atores: 15,
    nome: 'Filme Objeto',
    genero: 'Comedia',
    foiAssistido: true
}

function exibirPropriedades(obj) {
    for (prop in filme) 
        if (typeof obj[prop] === 'string') 
            console.log(prop,obj[prop])
}

exibirPropriedades(filme);