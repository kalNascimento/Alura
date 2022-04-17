// em js temos as funções / funcition

function myFunction(){
    console.log("ok")
}

function myFunction2(texto){
    console.log(texto)
}

function myFunction3(number, number2){
    return number + number2
}

function myFunction4(number = 0, number2 = 0){
    return number + number2
}

myFunction()
myFunction2("teste")
myFunction3(2, 3)
myFunction4(2)