const cliente = {
    nome: "kalebe",
    idade: "22",
    sexo: "masculino"
}

const data = ["nome", "idade", "sexo"]

console.log(cliente[data[0]])

data.forEach(info => console.log(cliente[info])) // percorrer a string executando o codigo no objeto