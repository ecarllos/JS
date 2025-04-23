var data = new Date()
var diaSem = data.getDay()

console.log(diaSem)

switch (diaSem){
    case 0:
        console.log("hj é domingo")
        break
    case 1:
        console.log("hj é segunda")
        break
    case 2:
        console.log("hj é Terça")
        break
    case 3:
        console.log("hj é quarta")
        break
    case 4:
        console.log("hj é quinta")
        break
    case 5:
        console.log("hj é Sexta")
        break
    case 6:
        console.log("hj é sábado")
        break
}