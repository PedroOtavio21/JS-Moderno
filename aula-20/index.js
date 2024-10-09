/** Utilizando o Npm
 * Sempre que inicar um projeto, utilize o seguinte comando para iniciar o 'npm':
 * - npm init
 * 
 * Para instalar alguma dependência do npm:
 * - npm install --save nome_dependencia ou npm i --save nome_dependencia
 * 
 * Para instalar dependência de desenvolvimento (Enquanto desenvolve sua aplicação):
 * - npm i --save-dev nome_dependencia
 * 
 * Para instalar dependências globais:
 * - npm i --global nome_dependencia
 * 
 * Para remover uma dependência:
 * - npm uninstall nome_dependencia
 */

const lodash = require('lodash')

console.log(lodash.isArray([]))
console.log(lodash.kebabCase("Pedro Otávio de Sousa Bezerra"))