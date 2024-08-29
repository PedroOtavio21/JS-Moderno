/** group 
 * Ocorre fora da declaração da variável ou função
 * Permite vários elementos, como o export inline
 * Não permite nomenclatura diferente
 * Sintaxe:
 * - export { elemento } / import { elemento } from 'caminho.js'
*/

function group(){
    console.log(`Export nomeado não-inline (agrupado)`)
}

/** export default non-inline
 * Pode escolher qualquer outro tipo de nome
 * Permite APENAS 1 POR ARQUIVO
 * Usado como acima, em qualquer lugar do arquivo
 */

function exportDefault(){
    console.log(`Export default não-inline`)
}

export { group }
export default exportDefault