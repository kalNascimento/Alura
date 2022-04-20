// Objeto peter Paker

const personagem = {
    nome: "Peter",
    sobrenome: "Parker",
    vingador: true,
    profissão: "fotografo",
    hobbie: "Homem-aranha"
}

const data = ["nome", "sobrenome", "vingador", "profissão", "hobbie"]
data.le
data.forEach(info => {
    if (personagem[info] === true){
        console.log("vingador")
    } else {
        console.log(personagem[info])
    }
});