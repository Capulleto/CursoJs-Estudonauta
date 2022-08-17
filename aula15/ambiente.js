let num = [5, 8, 2, 9, 3]
num.push(1)// coloca o valor emtre parenteses no final do vetor
num.sort() //método que coloca os valores do vetor em ordem crescente
console.log(num) //mostra o vetor
console.log(`O vetor tem ${num.length} posições.`)//mostra o tamanho do vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)//mostra o primeiro elemento do vetor



let pos = num.indexOf(4) //mostra -1 pq o número nao está no vetor
if (pos == -1) { 
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}


/* for (let pos=0; pos < num.length; pos++ ) {
  console.log(num[pos])
} */