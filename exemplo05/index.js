
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

console.log("Gerenciando Pacotes com NPM");
const nome = "Samuel";
const idade = 15;

if(idade >= 18 ){
    console.log( chalk.blue(`O aluno ${nome} é maior de idade`));
} else {
    console.log(chalk.red(`O aluno ${nome} é menor de idade`));
}

console.log(chalk.blue('Hello World!'));

chalkAnimation.radar('Thiago boboo');
chalkAnimation.karaoke('Thiago bobão');
