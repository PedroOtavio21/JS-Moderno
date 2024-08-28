/** Arrow Functions
 * - Nova maneira de se criar funções anônimas
 * - Não utilixa a palavra function, sendo apenas '=>' após os parâmetros 
 * - Permite retornar diretamente o valor da expressão, caso seja uma função de 
 * linha única
 * 
 * Sintaxe: 
 *  const pow = x => {
 *      return x * x
 * }
 * 
 * const sum = (a, b) => a + b
 */

const soma = (a, b) => {
    return a + b
}

const a = 2
const b = 5

console.log(`A soma entre ${a} e ${b} é: ${soma(a,b)}!`)