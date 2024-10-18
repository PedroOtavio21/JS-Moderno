"use strict";

var mediaSimples = function mediaSimples() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var qntdNumeros = numeros.length;
  var soma = numeros.reduce(function (acum, numero) {
    return acum + numero;
  }, 0);
  return soma / qntdNumeros;
};
console.log("M\xE9dia Aritm\xE9tica simples: ".concat(mediaSimples(1, 3, 5)));

// Para um maior controle, aplicar um operador de coalescência nula abaixo em 'peso'
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, entradas = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entradas[_key2] = arguments[_key2];
  }
  var soma = entradas.reduce(function (accum, _ref) {
    var numero = _ref.numero,
      peso = _ref.peso;
    return accum + numero * peso;
  }, 0);
  var somaPesos = entradas.reduce(function (accum, entradas) {
    return accum + entradas.peso;
  }, 0);
  return soma / somaPesos;
};
console.log("M\xE9dia Ponderada: ".concat(mediaPonderada({
  numero: 7,
  peso: 2
}, {
  numero: 6,
  peso: 3
}, {
  numero: 10,
  peso: 1
})));
var mediana = function mediana() {
  for (var _len3 = arguments.length, numeros = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numeros[_key3] = arguments[_key3];
  }
  var numerosOrdenados = [].concat(numeros).sort(function (a, b) {
    return a - b;
  });
  var meio = Math.floor(numerosOrdenados.length / 2);
  if (numerosOrdenados.length % 2 !== 0) {
    return numerosOrdenados[meio];
  }
  var primeiroMeio = numerosOrdenados[meio - 1];
  var segundoMeio = numerosOrdenados[meio];
  return mediaSimples(primeiroMeio, segundoMeio);
};
console.log("Mediana com 1 n\xFAmero: ".concat(mediana(1, 3, 2, 7, 5)));
console.log("Mediana com 2 n\xFAmeros: ".concat(mediana(1, 3, 2, 5, 7, 4)));
var moda = function moda() {
  for (var _len4 = arguments.length, numeros = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numeros[_key4] = arguments[_key4];
  }
  var quantidade = numeros.map(function (numero) {
    return [numero, numeros.filter(function (n) {
      return numero === n;
    }).length];
  });
  quantidade.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantidade[0][0];
};
console.log("Moda: ".concat((1, 1, 3, 4, 2, 4, 5, 7, 6, 4, 1, 2, 4)));