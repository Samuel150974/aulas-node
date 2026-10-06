// var, let e const
console.log("Olá Mundo!");

let aluno = "Manoel Gomes";
let nota1 = 9.8;
let nota2 = 8.1;
let media = Math.round((nota1 + nota2) / 2);

console.log(`O aluno ${aluno} teve média: ${media}`);
console.log('Nota 1:' + nota1 + ' Nota 2:' + nota2 + ' Média:' + media);
console.log('------------------------');

let dados = {
    nome : 'Nelson Mandela',
    idade: 90,
    profissao : 'Humanista'
};

console.table(dados);
console.log(dados.nome);

console.log('------------------------');

if (media >= 7){ 
    console.log (`O aluno ${aluno} foi Aprovado`);
} else {
    console.log (`O aluno ${aluno} foi Reprovado`);
}





















