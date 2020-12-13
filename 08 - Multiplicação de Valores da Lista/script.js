const arrayNumeros = [1,2,3,4,5];

multiplica(arrayNumeros);

function multiplica (numeros) {    
    const total = numeros.reduce((total, valor) => total *= valor);    
    console.log(total);
}