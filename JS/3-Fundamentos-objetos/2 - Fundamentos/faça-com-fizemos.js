const contribuidor = {
    nome: "kalebe",
    idade: "22",
    profissão: "desenvolvedor"
}

// adicionar uma nova propriedade q tambem é um objeto

contribuidor.dependentes = [{
    nome: "joão",
    idade: "1",
    parentesco: "filho"
}]

// adicionar um novo dependente

contribuidor.dependentes.push({
    nome: "ana",
    idade: "2",
    parentesco: "filha"
})
// imprimir o nome de todos os parentes
console.log(`Os nomes dos dependentes são: ${contribuidor.dependentes[0].nome},
${contribuidor.dependentes[1].nome}`)