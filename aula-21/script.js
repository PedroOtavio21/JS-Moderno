/** Usando o npm
 * Para iniciar um projeto com npm, você utiliza:
 * -    npm init
 * Para instalar um módulo pelo npm, você utiliza:
 * -    npm install --save nomeModulo
 * -    para formato de desenvolvimento: npm instal --save-dev nomeModulo
 * Para remover uma dependência:
 * -    npm uninstall nomeModulo
*/

const lodash = require('lodash')

console.log(lodash.isArray([]))
console.log(lodash.kebabCase('Pedro Otávio'))