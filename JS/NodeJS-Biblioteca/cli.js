import pegaArquivo from './index.js';
import validationURLs from './http-validation.js';
import chalk from 'chalk';


const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if (caminho[3] === "validar") {
        console.log(chalk.yellow("links validados"), await validationURLs(resultado));
    } else {
        console.log(chalk.yellow('Lista de links'), resultado)
    }
    
}

processaTexto(caminho)