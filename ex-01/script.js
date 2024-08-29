/*
De acordo com os conhecimentos aprendidos nesse módulo sobre recursos do javascript moderno, 
crie quatro funções que aceitem qualquer quantidade de parâmetros e utilizando a sintaxe de 
*arrow functions* para calcular as operações abaixo.

Essas funções devem mostrar o resultado de alguma forma em texto porém não é necessário 
implementar uma interface. Para testar a função você pode fazer chamadas manuais a ela no 
javascript ou utilizar o console do navegador (qualquer função incluída na página pode ser 
chamada diretamente no console).

Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo o 
total da soma pela quantidade de valores.

Média Aritmética Ponderada: Semelhante à média aritmética simples, porém é possível atribuir 
um peso a cada valor informado, fazendo com que ele tenha um valor proporcionalmente 
diferente dos outros. Pode ser calculada somando as multiplicações dos valores pelos seus 
respectivos pesos e dividindo o total pela soma dos pesos.

Mediana: Pode ser calculada encontrando o valor central de uma sequência de números crescente 
ou decrescente. Caso existam dois números centrais, a mediana é calculada através da média aritmética 
simples desses dois números.

Moda: Pode ser calculada encontrando o valor que mais se repete em um dado conjunto.
*/

const mediaSimples = (...numeros) => {
    const qntdNumeros = numeros.length
    const soma = numeros.reduce((acum, numero) => acum + numero, 0)
    return soma / qntdNumeros
}

console.log(`Média Aritmética simples: ${mediaSimples(1,3,5)}`)

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

// const mediana = (...numeros) => {
    
// }