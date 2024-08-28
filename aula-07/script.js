/** Operador Spread 
 * Funcionalidade que permite espalhar elementos de um objeto iterável, como um Array ou uma 
 * String;
 * Sintaxe:
 * -    ...iterableObject
 * Pode ser usado para diferentes fins, por exemplo:
 * -    Passar vários parâmetros de uma única vez
 * -    Clonar objetos iteráveis
 * -    Fazer manipulações sem afetar o objeto original
 * -    Transformar strings em arrays
*/

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen']

// Exibe todos os elementos do array
console.log(towns)
// Separa os elementos do array e os exibe no console
console.log(...towns)
// Separa o conteúdo presente no array na posição[0]
console.log(...towns[0])

// Array é passado como referência, fazendo com que a alteração também afeta o array original.
const townsCopy = towns
townsCopy.pop()
townsCopy.pop()
townsCopy.push('June')

console.log({towns, townsCopy})

// Agora sim, uma verdadeira cópia de towns, array original
const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({towns, townsCopy, townsClone})

// Realizando um spread em um objeto comum.
const townsObj = {...towns}
const townsObjClone = {...townsObj}

console.log({townsObj, townsObjClone})