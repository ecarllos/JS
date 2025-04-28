let seltab = document.getElementById("seltab") // indica o select pela variável (seltab)
let txtn = document.getElementById("txtn") // indica o input numérico pela variável (txtn)
let res = document.getElementById("res") // indica a div onde as respostas serão inseridas

let list = [] // cria o array onde os dados serão inseridos e calculados

let add
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

    if(txtn.value.length == 0 || num >= 100 ){ // verifica se a caixa numérica está vazia ou se o número digitado é maior ou igual a 10
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

    res.innerHTML = list
}

function calcular(){
    
    if (list.length == 0){ // verifica se a tabela está vaiza ou não
        alert("cadastre algum número antes de enviar")
    } else{

        if(list.length > 1){ // se tiver mais de 1 número cadastrado na array ele organizará a lista
            list.sort((a, b) => a - b)
        } 
    
        /* OBS: infelizmente a função array.sort() foi feita para string,
        e quando colocada para interagir com números ela os trata como string, 
        por isso que esse código só permite números de 1 a 9 pq se for algum número
        maior o código não ocorrerá normalmente */

        let total = list.length  // conta quantos números estão cadastrados na array [list]
        let maior_numero = list[total-1] // calcula o maoir número da array (list) pegando a última posição da lis
        let menor_numero = list[0] // calcula o menor número pegando o 1° número cadastrado na array, já que a array foi ordanada em ordem crescente
        let soma = 0; // variável de soma 
        for (let c of list) { // a variável (c)  percorrerá toda a array => sua função é adquirir o valor de acordo com a posição da array
            soma += c // adiciona o valor de (c) na variável (soma) e depois adicionna o novo valor de (c) com o antigo armazenado na variável (soma) 
        }
        let media = soma / list.length // calcula a media dos números cadastrados => pega a variável de soma e divide pelo total de números



        res.innerHTML = ``
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados </p>`
        res.innerHTML += `<p> o maior número cadastrado é ${maior_numero} </p>`
        res.innerHTML += `<p> o menor número cadastrado é ${menor_numero}</p>` 
        res.innerHTML += `<p> A soma dos números cadastrados é ${soma}</p>` 
        res.innerHTML += `<p> A média dos números cadastrados é ${media}</p>`        
    }

}

function limpar(){
    list.splice(0, list.length) // apaga todos os elementos da array


    seltab.removeChild(add)
     res.innerHTML = " ."
}

