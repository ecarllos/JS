let = seltab = document.getElementById("seltab") // indica o select pela variável (seltab)
let txtn = document.getElementById("txtn") // indica o input numérico pela variável (txtn)

let list = [] // cria o array onde os dados serão inseridos e calculados

function naLista(n, l){ //função que verifica se o número digitado está na lista ou não
    // n == valor digittado pelo usuário
    // l == lista que o valor foi atribuído
    if(l.indexOf(n) != -1){ 
        // essa função verifica se o valor (n) está inserido na lista (l)
        // se o valor for diferente de (-1) quer dizer que o número não está na lista
        return false
    }
    else{
        // se n estiver na lista o valor será -1
        // logo ele não poderá ser executado pq já existe esse valor dentro da nossa lista
        return true
    }
}

function adicionar(){
    /* 
    essa função adiciona um novo    elemento na tabela #seltab,
    que é uma tabela com id "seltab" no HTML.
    o elemento adicionado é um novo elemento <option> com o valor do input #txtn,
    */
    let num = Number(txtn.value) // simplifica o processo de filtragem de elementos utilizandp a variável (num)

    if(num.lenght == 0 || num >= 10 ){ // verifica se a caixa numérica está vazia ou se o número digitado é maior ou igual a 10
        alert("digite um número corretamente")
    } 
    else if( !naLista(num, list)){ // utiliza a função vista anteriormente para verificar se o número digitado já foi cadastrado antes
        alert("Esse número já foi cadastrado")
    } 

    else { // passada a estapa de condições o código de implantação de números começa agora

        list.push(num) // adiciona o número digitado a nossa array
        let add = document.createElement("option") // cria um elemento (option) dentro do nosso select caracterizado pela variável (add)
        add.text = `Valor ${num} adicionado` // adiciona um texto a variável (add) que será o texto que o usuário vai conseguir olhar
        seltab.appendChild(add)
    }
    txtn.value = '' // faz com que no final do processo de adicionar a caixa de texto fique limpa/vazia
    txtn.focus() 
}

function calcular(){
    let res = document.getElementById("res")

    if (list.length == 0){
        alert("cadastre algum número antes de enviar")
    } else{
        res.innerHTML = ``

        let total = list.length
        res.innerHTML += `Ao todo, temos ${total} números cadastrados <br>`


        let maior_numero = list[total-1]
        res.innerHTML += `o maior número cadastrado é ${maior_numero} <br>`


        let menor_numero = list[0]
        res.innerHTML += `o menor número cadastrado é ${menor_numero}<br>`


        let soma = 0;
        for (let c in list) {
            soma += list[c];
        }
        res.innerHTML += `A soma dos números cadastrados é ${soma}<br>`


        
        let media = soma / list.length;
        res.innerHTML += `A média dos números cadastrados é ${media}`        
    }

}

