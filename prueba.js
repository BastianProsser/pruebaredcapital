// TASK 1 FIBONACCI

const fibonacci = (num) => {
    let fibo = [0, 1]
    for (i = 1; i < num; i++) 
        fibo.push(fibo[i] + fibo[i - 1])
    return fibo
}
// ingresar el numero del que desea sacar la cadena
console.log(fibonacci(15))

// TASK 2 INVERTIR STRING

const invertirString = (cadena) => {
    let cadenaInvertida = "";
    for (i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}

console.log(invertirString("anitalavalatina"))

// TASK 3

const multiplicar = (a, b) => {
    if (b == 0) {
        return 0
    } else {
        return a / (1 / b)
    }
}
console.log(multiplicar(5, 4))

// task 4

const array = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100
]
const numPrim = [];
const primo = (a)=>{
    for(i=2;i<a;i++){
        if(a%i === 0)
        return false; 
    }
    return true;
}
array.forEach(a =>{
    if(primo(a)){
        numPrim.push(a)
    }
})

let sumaArray = numPrim.reduce((a,b) => a+b, -1)

console.log(sumaArray)