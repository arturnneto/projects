// Criar um objeto de postagem de blog com:
// -titulo -mensagem -autor -visualizaçoes -comentarios(autor,mensagem) -estaAoVivo

let postagemNoBlog = {
    titulo: `Titulo da postagem`,
    mensagem: `Este é a mensagem que está no post.`,
    autor: `Nome do autor`,
    visualizacoes: 999,
    comentarios: {
        autor: `Nome do autor`,
        comentario: `Comentario`
    },
    estaAoVivo: true
}

console.log(postagemNoBlog)

 // agora utilizando factory functions
 function criarPostagem(titulo,mensagem,autor) {
    return {
    titulo,
    mensagem,
    autor,
    visualizacoes: 0,
    comentarios: [],
    estaAoVivo: false
    }
 }

 console.log(criarPostagem('titulo','mensagem','autor'))