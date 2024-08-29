/** ESModules
 * Para poder utilizar ESModules, você deve:
 * -    Utilizar a palavra export antes de uma função ou variável (Pode ser feito mais de uma exportação)
 * -    utilizar um import { elementosExportados } from './caminhoDeElementos.js'
 * -    passar um atributo type='module' no index.html, dentro da tag script
 */

/* 
Antes: 
function label(attributes){
    const element = document.createElement('label')
    Object.assign(element, attributes)
    return element
}

function input(attributes){
    const element = document.createElement('input')
    Object.assign(element, attributes)
    return element
}

function br(){
    const element = document.createElement('br')
    return element
}

Depois:
*/
import { name, label, input, br} from './functions.js'

console.log(`Meu nome é: ${name}`)
console.log(label({for: 'fullname', textContent: 'Nome completo:'}))
console.log(input({id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo ...'}))
console.log(br())