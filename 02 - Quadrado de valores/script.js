const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

quadrado(arrayNumeros);

function quadrado(numeros) {
    const quadrados = numeros.map((num) => num * num);
    for (const quadrado of quadrados) {
        console.log(quadrado);
    }
}