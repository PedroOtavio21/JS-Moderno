/** Rest Params
 * Técnica que, a partir de um operador spread, permite que uma função possa receber qualquer número de 
 * parâmetros
 * Permite também que estes parâmetros sejam manipulados como um array na definição da função
 * (Diferência-se do objeto Arguments)
*/

// Pode ser passada uma quantidade indeterminada de parâmetros dentro da função
// Além disso, necessário utilizar o rest params como último parâmetro!

function sum(...numbers){
    return numbers.reduce((accum, number) => accum + number, 0)
}