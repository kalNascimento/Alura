// O metodo splice, pode substituir dados de uma array, ou apenas adicionar dados em um 
//lugar determinado

let notas = [0, 1, 2, 4, 5, 6, 7, 8, 9]

notas.splice(3, 0, 3) // adiciona um novo dado na posição desejada
notas.splice(8, 2, 9, 8) // retira os dois ultimos e acrescentas 9 e 8
console.log(notas)