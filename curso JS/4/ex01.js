function calcular(){
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var pulos = document.getElementById("pulo")

    for( var c = 1; inicio <= fim; c = c + pulos){
        alert(c)
    }
}