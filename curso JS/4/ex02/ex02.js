function calcular(){
    let txtn = document.getElementById("txtn")
    let n = Number(txtn.value)
    let list = []
    var res = document.getElementById("res")

    if(n.leght == 0){
        alert("digite algum número")
    } 
    else{
        for(let c = 1; c <= 10; c++){
            let item = document.createElement("option")
            item.text = `${n} x ${c}= ${n * c}`
        }        
    }

}