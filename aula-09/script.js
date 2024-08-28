/** Encadeamento Opcional
 * Tal operador permite que sejam lidas propriedades internas de uma cadeia de Objetos, 
 * sem que sejam lançados erros, caso a propriedade seja Nullish (Null ou Undefined).
 * Sintaxe: 
 * -    person?.addres?.cep
 */

const user = {
    name: 'John Doe',
    email: 'doejohn@email.com',
    friends: [{
        name: 'Mary',
        addres: {
            street: 'Some Street',
            number: 89
        }
    }],
    age: 42,
    phone: {
        countryCode: '+55',
        ddd: '22',
        number: '998765432'
    }
}

// O código abaixo dará erro ao ler uma propriedade de undefined!
// console.log(user.friends[0].phone.ddd)

// O resultado será 'undefined'! Pois terá um retorno após a propriedade não existir
console.log(user?.friends[0]?.phone?.ddd)
console.log(user?.brothers?.length)
console.log(user?.brothers?.[5]?.name)