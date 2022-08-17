function fatorial (n) { 
    let fat = 1
    for(let c = n; c > 1; c--) {// contador (c) começa em n e enquanto for maior que 1, o contador perde um(c--)
        fat *= c
}
return fat
}
console.log(fatorial(5))