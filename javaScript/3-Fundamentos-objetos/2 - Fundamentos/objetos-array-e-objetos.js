const cliente = {
    nome: "kalebe",
    idade: "22",
    sexo: "masculino",
    profissão: ["pintor", "eletricista"],
    dependentes: [{ nome: 'jose', parentesco: 'filho' }]
}

cliente.dependentes.push({
    nome: "ana",
    parentesco: "filha"
})

console.log(cliente)

const filha = cliente.dependentes.filter( sexo => 
    sexo.parentesco === "filha"
)

console.log(filha[0].nome)