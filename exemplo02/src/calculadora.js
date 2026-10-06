// função que soma 2 números
function soma(valor1, valor2){
    return valor1 + valor2
}

// função que subtrai 2 números
function subtrai(valor1, valor2){
    return valor1 - valor2
}

function multiplica(valor1, valor2){
    return valor1 * valor2
}

function divide(valor1, valor2){
    return valor1 / valor2
}

// exportando um recurso
// export default soma;

// exportando diversos recursos ao mesmo tempo
// export { soma, subtrai, multiplica, divide };

// forma antiga de exportar módulos (não precisa do package.json)
module.exports = { soma, subtrai, divide, multiplica };

// exportando dentro de uma variável
// const operacoes = { soma, subtrai, divide, multiplica };
// export default operacoes;