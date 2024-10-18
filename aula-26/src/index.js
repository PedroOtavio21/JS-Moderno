const mediaSimples = (...numeros) => {
    const qntdNumeros = numeros.length
    const soma = numeros.reduce((acum, numero) => acum + numero, 0)
    return soma / qntdNumeros
}

console.log(`Média Aritmética simples: ${mediaSimples(1,3,5)}`)

// Para um maior controle, aplicar um operador de coalescência nula abaixo em 'peso'
const mediaPonderada = (...entradas) => {
    const soma = entradas.reduce((accum, {numero, peso}) => accum + numero * peso, 0)
    const somaPesos = entradas.reduce((accum, entradas) => accum + entradas.peso, 0)
    return soma / somaPesos
}

console.log(`Média Ponderada: ${mediaPonderada(
    {numero: 7, peso: 2},
    {numero: 6, peso: 3},
    {numero: 10, peso: 1}
)}`)

const mediana = (...numeros) => {
    const numerosOrdenados = [...numeros].sort((a, b) => a - b)
    const meio = Math.floor(numerosOrdenados.length / 2)
    if(numerosOrdenados.length % 2 !== 0){
        return numerosOrdenados[meio]
    }
    const primeiroMeio = numerosOrdenados[meio - 1]
    const segundoMeio = numerosOrdenados[meio]
    return mediaSimples(primeiroMeio, segundoMeio)
}

console.log(`Mediana com 1 número: ${mediana(1,3,2,7,5)}`)
console.log(`Mediana com 2 números: ${mediana(1,3,2,5,7,4)}`)

const moda = (...numeros) => {
    const quantidade = numeros.map(numero => [
        numero,
        numeros.filter(n => numero === n).length
    ])
    quantidade.sort((a,b) => b[1] - a[1])
    return quantidade[0][0]
}

console.log(`Moda: ${1,1,3,4,2,4,5,7,6,4,1,2,4}`)