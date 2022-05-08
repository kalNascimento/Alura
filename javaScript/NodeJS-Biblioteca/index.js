import chalk from 'chalk';
const texto = "texto retornado por uma função";

console.log(chalk.blue('Hello world!'));

function TextoReturn(string){
    return string;
}

console.log(TextoReturn(texto));