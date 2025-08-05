let lines = input.split(" ")

let P1 = parseInt(lines[0])
let C1 = parseInt(lines[1])
let P2 = parseInt(lines[2])
let C2 = parseInt(lines[3])

// Seu código vai aqui
if(P1*C1 === P2*C2 ){
    console.log('0')
}if(P1*C1 > P2*C2){
    console.log('-1')
}if(P1*C1 < P2*C2){
    console.log('1')
}