import pegaArquivo from '../index.js'

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () =>{
        expect(typeof pegaArquivo).toBe('function');
    })
    it('Deve retornar array com resultados', async () => {
        const res = await pegaArquivo('C:/Users/kaleb/Documents/Github/Alura/javaScript/NodeJS-Biblioteca/test/arquivos/texto_true.md');
        expect(res).toEqual(arrayResult);
    })
    it('deve retornar "não há links"', async () => {
        const resultado = await pegaArquivo('C:/Users/kaleb/Documents/Github/Alura/javaScript/NodeJS-Biblioteca/test/arquivos/texto_false.md');
        expect(resultado).toBe('não há links');
    })
})
