// let num = [5, 7, 2, 3]
// console.log(num)

// num[4] = 1 // adiciona um elemento na ordem especificada
// console.log(num)

// num.push(9) // adiciona um elemento no final da array
// console.log(num)

// console.log(num.length) // conta quantos elementos a array possui

// num.sort() // ordena a array em ordem crescente
// console.log(num)

// ---------------------------------

let array = [2,4,5,6,3,52,65,76,54,76,241,90]

let qnt = array.length

// console.log(x)

// for(let c = 0; c <= qnt; c++){
//     console.log(array[c])
// }



let n = []
for(let c in array){ //código de simplificação onde a variável contadora (c) está percorrendo a array
    let n = array[c] // uma variável para indicar a posição dos valores da array simbolizada pela variável contadora crescente de acordo a array (c)
    let pos = array.indexOf(n) // indica a posição de um determinado valor da array deternimado pela variavel (n)
    console.log(`o valor ${n} está na posição ${pos}`)
}

