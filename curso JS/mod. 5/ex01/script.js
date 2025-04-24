let = seltab = document.getElementById("seltab")
let txtn = document.getElementById("txtn")
let num = Number(txtn.value)
let list = []

// let c = 0
// let verif =[]

// function naLista(n, l){
//     if(l.indexOf(n) != -1){
//         return true
//     }
//     else{
//         return false
//     }
// }

function adicionar(){
    /* 
    essa função adiciona um novo    elemento na tabela #seltab,
    que é uma tabela com id "seltab" no HTML.
    o elemento adicionado é um novo elemento <option> com o valor do input #txtn,
    */

    if(num.lenght == 0 || num >= 10){
        alert("digite um número corretamente")
    } else {
        // list.push(num)
        let add = document.createElement("option")
        add.text = `Valor ${num} adicionado`
        seltab.appendChild(add)
    }
    console.log(add)
    // num = ''
    // txtn.focus()
}

// function calcular(){
//     let res = document.getElementById("res")

//     let total = list.length
//     res.innerHTML = `Ao todo, temos ${total} números cadastrados`


//     let maior_numero = list[total-1]
//     res.innerHTML = `o maior número cadastrado é ${maior_numero}`


//     let menor_numero = list[0]
//     res.innerHTML = `o menor número cadastrado é ${menor_numero}`


//     let soma = 0;
//     for (let c in list) {
//         soma += list[c];
//     }
//     res.innerHTML = `A soma dos números cadastrados é ${soma}`;


    
//     let media = soma / list.length;
//     res.innerHTML = `A média dos números cadastrados é ${media}`;
// }