const arrayPessoas = [
    {
        "nome": "Adriele",
        "idade": 16,
        "telefone": "(33)333333333",
        "profissao": "Programador"
    },
    {
        "nome": "Anna Julia",
        "idade": 9,
        "telefone": "(44)444444444",
        "profissao": "Programador"
    },
    {
        "nome": "Débora",
        "idade": 45,
        "telefone": "(22)222222222",
        "profissao": "Programador"
    },
    {
        "nome": "Dario",
        "idade": 50,
        "telefone": "(11)111111111",
        "profissao": "Programador"
    }
];

programador(arrayPessoas);

function programador(pessoas) {
   const programador = pessoas.every(pessoa  => pessoa.profissao == 'Programador');   
   programador ? console.log('Todos são programadores') : console.log('Nem todos são programadores');   
}