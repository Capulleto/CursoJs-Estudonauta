let valores = [8, 1, 7, 4, 2, 9]

console.log(valores) //mostra o vetor entre []
/*
for (let pos = 0; pos < valores.length; pos++) { //mostra os valores e suas posições
     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}