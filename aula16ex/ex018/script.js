let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //vetor que será utilizado para analizar os dados

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores))  {    // adiciona apenas se for um número e se não estiver na lista
        valores.push(Number(num.value)) 
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' //limpa a frase  "Ao todo, temos X números cadastrados

} else {
    window.alert('Valor inválido ou já encontrado na lista.')
}
    num.value = '' //limpa a caixa onde digitamos o número após a entrada de um valor
    num.focus() //o cursor volta piscar dando destaque ao local onde devemos digitar o número
}
function finalizar () {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores [0] //início da avaliação dos valores começando pelo primeiro número. Será o maior pois só tem ele na lista
        let menor = valores [0] // idem ao anterior
        let soma = 0 //inicia pelo 0
        let media = 0 //inicia pelo 0
        for(let pos in valores) { //faz o teste para cada posição
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += ` <p> Ao todo, temos ${tot} números cadastrados.<p> `
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.`
        res.innerHTML += `<p>A média dos números é ${media}.`
    }
}