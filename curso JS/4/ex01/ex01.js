function calcular(){
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var pulos = document.getElementById("pulo")
    var res = document.getElementById("res")
    var list = []


    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(pulos.value)

    if(i.lenght == 0 || f.lenght == 0 || p.lenght == 0){
        alert("Preencha os campos corretamente")
    } else{
        for( var c = i; c <= f; c += p){
            // res.innerHTML = c
            list.push(c)
            
        }
        res.innerHTML = list        
    }

}