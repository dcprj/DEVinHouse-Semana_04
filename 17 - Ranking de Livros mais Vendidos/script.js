const livrosMaisVendidos = (primeiro, segundo, terceiro, ...demais) => {
    console.log("Primeiro Lugar: " + primeiro);
    console.log("Segundo Lugar: " + segundo);
    console.log("Terceiro Lugar: " + terceiro);
    console.log("Demais: " + demais);
}

livrosMaisVendidos('Dom Quixote (1612)',
    'História em Duas Cidades (1859)',
    'O Senhor dos Anéis (1954-1955)',
    'O Pequeno Príncipe (1943)',
    'Harry Potter e a Pedra Filosofal (1997)',
    'O Hobbit (1937)',
    'O Caso dos 10 Negrinhos (1939)',
    'O Sonho da Câmara Vermelha (1754-1791)');
    