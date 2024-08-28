/** Desestruturação de Objetos e Arrays
 * Funcionalidade que permite criar varíaveis a partir de à partir de propriedades de Objetos ou 
 * elementos de um Array
 * Objetos:
 * -    variáveis com mesmo nome da propriedade do Objeto
 * -    Ex: const {name, email} = person
 * Arrays:
 * -    pode-se atribuir qualquer nome para a variável
 * -    const [x,y] = coordinates
 * 
 * Ex: 
 *  function hello({name}){
 *    console.log(`Hello, ${name}`)
 *  }
 */

const person = {
    name: 'Luke',
    job: 'Farmer',
    parents: ["Anakin", "Padme"]
}

const name = person.name
const {job, parents} = person

console.log(name, job, person)