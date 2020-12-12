const arrayNotas = [10,10,9];

calculaMedia(arrayNotas);

function calculaMedia (notas) {    
    const total = notas.reduce((soma, nota) => soma += nota);    
    console.log(total / notas.length);
}