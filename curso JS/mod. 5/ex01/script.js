
let c = 0
let verif = []

function adicionar(){
    /* 
    essa função adiciona um novo    elemento na tabela #seltab,
    que é uma tabela com id "seltab" no HTML.
    o elemento adicionado é um novo elemento <option> com o valor do input #txtn,
    */

    let = seltab = document.getElementById("seltab")
    let txtn = document.getElementById("txtn")
    let num = Number(txtn.value)

    

    if(num.lenght == 0){
        alert("digite um número corretamente")
    } else {
        // let cont = verif[c]
        // verif.push(num)
        let add = document.createElement("option")
        add.text = `Valor ${num} adicionado`
        seltab.appendChild(add)   
        // c++       
    }   
    // console.log(cont)
}

function calcular(){
    
}