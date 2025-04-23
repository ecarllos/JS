

let tab = []

function adicionar(){
    /* 
    essa função adiciona um novo    elemento na tabela #seltab,
    que é uma tabela com id "seltab" no HTML.
    o elemento adicionado é um novo elemento <option> com o valor do input #txtn,
    */
    let = seltab = document.getElementById("seltab")
    let txtn = document.getElementById("txtn")
    let num = Number(txtn.value)
    let add = document.createElement("option")

    add.text = `Valor ${num} adicionado`
    seltab.appenChield(add)
    
    console.log(add)
    

}