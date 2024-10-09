/** Módulos CommonJS
 * A partir desta aula, será utilizado o javascript a partir do node! 
 * ----------------------- (Para executar: Node './caminho_desejado') -----------------------
 * 
 * Para criar um módulo CommonJs, primeiro você deve:
 * -    A partir do bloco de código desejado em outro arquivo, fazer um 'module.exports = nomeFuncao'
 * -    Após isso, no arquivo principal, realizar no começo do arquivo, uma criação de uma variável 
 * (Permite qualquer nome, porém é bom utilizar o mesmo nome do método) que receberá um 'require("./caminho
 * ArquivoComMétodo")'
 * -    Caso crie uma variável com um nome diferente, a execução do método exportado terá que ser o novo 
 * nome escolhido. Ex:
 * const r = require('./render')
 * r() // Executa uma determinada função
 * -    No node, apenas o módulo no estilo CommonJS funciona, não realizando uma modularização ESModules
 */

/* 
Antes:
function render(){
    console.log('Renderizando a interface da aplicação...')
}

function store(){
    console.log('Salvando as informações no Banco de Dados...')
}

Depois:
*/

const render = require('./render')
const store = require('./store')

console.log('Aplicação iniciada.')
render()
store()
console.log('Aplicação finalizada.')