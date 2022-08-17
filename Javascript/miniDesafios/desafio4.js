// Velocidade máxima de 70 Km/h
// A cada 5km acima do limite, 1 ponto
// Math.Floor()
// Caso o número de pontos seja maior que 12, a carteira é suspensa

function radar(velocidade) {
    let velocidadeMaxima = 70;
    let pontosPorKm = 5;
    let velocidadeSuspensao = 135;
    if (velocidade <= velocidadeMaxima) {
        return 'Dentro do limite.'
    }
    if (velocidade >= velocidadeSuspensao) {
        return 'Carteira Suspensa'
    }
    if ((velocidade > velocidadeMaxima) || (velocidade < velocidadeSuspensao))
        return ('Você levou ' + Math.floor((velocidade - velocidadeMaxima) / pontosPorKm) + ' pontos na carteira.') 
}

let velocidade = radar(45)
console.log(velocidade);