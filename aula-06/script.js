/** Desestruturação de Objetos e Arrays
 * Funcionalidade que permite criar varíaveis a partir de à partir de propriedades de Objetos ou 
 * elementos de um Array
 * Objetos:
 * -    variáveis com mesmo nome da propriedade do Objeto
 * -    Ex: const {name, email} = person
 * Arrays:
 * -    pode-se atribuir qualquer nome para a variável
 * -    a ordem é de EXTREMA importancia!
 * -    const [x,y] = coordinates
 * 
 * Ex: 
 *  function hello({name}){
 *    console.log(`Hello, ${name}`)
 *  }
 */

// Objetos
const person = {
    name: 'Luke',
    job: 'Farmer',
    parents: ["Anakin", "Padme"]
}

const name = person.name
const {job, parents} = person

console.log(name, job, person)

// Arrays
const [father, mother] = parents

console.log(father, mother)

// Functions
function createUser({name, job, parents}){
    const id = Math.floor(Math.random() * 9999)
    return {
        id, 
        name,
        job,
        parents
    }
}

const luke = createUser(person)

console.log(luke)