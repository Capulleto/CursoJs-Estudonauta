function contar () {
    let ini = document.getElementById('txti')//txti é o id
    let fim = document.getElementById('txtf')//txtf é o id
    let passo = document.getElementById('txtp')//txtp é o id
    let res = document.getElementById('res')//res é uma div

     if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ 
        
        res.innerHTML = 'Impossível contar!'
        //window.alert ('[ERRO! Faltam dados!')
    } else {
       res.innerHTML = 'Contando: <br>'
       let i = Number(ini.value) //Number converte o valor dentro da variável ini para número
       let f = Number(fim.value)
       let p = Number(passo.value)

       if (p<=0) {
            window.alert('Passo inválido! Considerando passo 1.')
            p=1
       }
    
       if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p)  { //let c = i - o contador começa no i; c <= f - enquanto for <= a f;  c+= p - o contador recebe ele mesmo mais o p . Essa contagem só funciona se i < f
                res.innerHTML += ` ${c} \u{1F449}` // adiciona o emoji da mãozinha. Só funciona entre crases
                }
            
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p)
                res.innerHTML += ` ${c} \u{1F449}`
        }

        res.innerHTML += `\u{1F3C1}`
       
    }
}