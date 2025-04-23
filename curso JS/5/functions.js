// function ParImp(n){
//     if (n%2 == 0){
//         // console.log(`o número ${n} é par`)
//         return "par"
//     } else{
//         // console.log(`o número ${n} é ímpar`)
//         return `o número ${n} é ímpar`
//     }
// }

// let res = ParImp(9)
// console.log(res)


// ---------------------------------


function somar(n1=0, n2=0){ // predefinição caso o valor não seja inserido/declarado
    return n1 + n2
}

let v1 = somar(10, 7)
let v2 = somar(33)

console.log(v1)
console.log(v2)