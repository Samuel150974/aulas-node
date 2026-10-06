// importando módulos
// importando um único recurso
// import soma from './src/calculadora.js';

// importando múltiplos recursos/módulos - maneira atual
//import { soma, subtrai, multiplica, divide } from './src/calculadora.js';

// importando módulo commonJS
const { soma, subtrai, multiplica, divide} = require('./src/calculadora.js');


let resultadoSoma = soma(8, 4);
let resultadoSubtrai = subtrai(8, 4);
let resultadoMultiplica = multiplica(8, 4);
let resultadoDivide = divide(8, 4);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Subtração: ${resultadoSubtrai}`);
console.log(`Mutiplicação: ${resultadoMultiplica}`);
console.log(`Divisão: ${resultadoDivide}`);
