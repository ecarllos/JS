function calcular(){
    let txtn = document.getElementById("txtn")
    let n = Number(txtn.value)
    var res = document.getElementById("seltab")

    if(n.leght == 0){
        alert("digite algum número")
    } 
    else{

        res.innerHTML = ``
        for(let c = 1; c <= 10; c++){
            let item = document.createElement("option")
            item.text = `${n} x ${c}= ${n * c}`
            res.appendChild(item)
        }        
    }

}