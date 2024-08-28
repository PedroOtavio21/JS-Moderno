/** Operador de coalescência nula
 * 
 * Operador lógico que retorna o operando do lado direito, quando o operador do lado esquerdo é null ou 
 * undefined. Caso contrário, retorna o lado esquerdo.
 * 
 * Pode ser usado em operações lógicas e também para atribuições de valores padrão através de short-circuit 
 * evaluation (avaliação de curto-circuito)
 * 
 * É diferente do operador lógico OR (||), onde ocorre um curto-circuito em expressões falsy(número 0 
 * por exemplo).
 */

const a = 0 // false
const b = null // false
const c = 'teste' // true

console.log(a || b || c) // teste

console.log(a ?? b ?? c) // 0

// Ou seja, esse operador aceita valores que normalmente não seriam aceitos em um operador Or comum, como 
// 0

let x = 0
let y = a || 42
console.log({x,y})
y = x ?? 42 // Caso x não possua algum valor, y receberá o valor padrão, que será 42.
console.log({x,y})

const z = false ?? 5
console.log({z}) // z será false!