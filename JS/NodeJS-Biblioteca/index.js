import fs from 'fs';

function extrairLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResult = [];
    const notLinks = 'não há links'
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResult.push({ [temp[1]]: temp[2]});
    }
    return arrayResult.length === 0 ? notLinks : arrayResult
}

function errorFile(erro) {
    throw new Error("não há caminho do arquivo")
}

async function pegaArquivo(pathFile) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(pathFile, encoding);
        return extrairLinks(texto);
    } catch (erro) {
        errorFile(erro)
    }
}

export default pegaArquivo











//pegaArquivo('./arquivos/texto.md');
/* 
    \[[^\]]*\]\((https?:\/\/[^$#\s].[^\s]*\)
    
    */






/* refatorados p/ async*/

/*function pegaArquivo(pathFile) {
    const encoding = 'utf-8';
    fs.promises.readFile(pathFile, encoding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch((erro) => errorFile(chalk.red(erro)))
}

function pegaArquivo(pathFile) {
    const encoding = 'utf-8';
    fs.readFile(pathFile, encoding, (erro, texto) => {
        if (erro){
            errorFile(erro);
        }
        console.log(chalk.green(texto));
    })
}*/