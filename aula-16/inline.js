/** inline
 * 
 * Visto pela última aula do módulo;
 * não é possível escolher outro nome em sua importação;
 * Caso queira usar outro nome: import {inline as i} from 'caminho.js'
 */

export function inline(){
    console.log(`Export nomeado inline`)
}

/** defaultInline
 * 
 * É usado inline como acima;
 * Permite APENAS 1 POR ARQUIVO!
 * Pode ser uma função anônima!
 * Permite qualquer nome;
 * Sintaxe: 
 * - import qualquerNome from 'caminho.js'
 */

export default function defaultInline(){
    console.log(`Export default inline`)
}
