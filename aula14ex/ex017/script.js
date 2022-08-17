function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.lenght == 0) {
        window.alert('Por favor, digite um número!')//essa janela não funciona. O código está considerando vazio como sse tivesse digitado 0.
    } else {
       let n = Number(num.value)
       let c = 1
       tab.innerHTML = '' //limpa a área de tabuada antes de mostrar a práxima tabuada
       while (c <= 10) {
           let item = document.createElement('option')
           item.text = `${n} x ${c} = ${n*c}`
           item.value = `tab${c}`
           tab.appendChild(item)
           c++
       }
    }
    
}     